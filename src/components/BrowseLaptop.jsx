import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import LaptopCard from './LaptopCard'
import LaptopFilterSidebar from './LaptopFilterSidebar'
import laptops from './laptopData'
import {
  filterLaptops,
  getFilterFacets,
  getPriceBounds,
} from './filterLogic'

const PAGE_SIZE = 24
const EMPTY_FILTERS = { minRating: 0 }

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  }).format(Number(price) || 0)

function BrowseLaptop() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState(EMPTY_FILTERS)
  const [priceRange, setPriceRange] = useState({ minPrice: '', maxPrice: '' })
  const [sortBy, setSortBy] = useState('relevance')
  const [page, setPage] = useState(1)
  const [cartItems, setCartItems] = useState([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const facets = useMemo(() => getFilterFacets(laptops), [])
  const priceBounds = useMemo(() => getPriceBounds(laptops), [])
  const results = useMemo(
    () =>
      filterLaptops(laptops, {
        query,
        filters,
        minPrice: priceRange.minPrice,
        maxPrice: priceRange.maxPrice,
        sortBy,
      }),
    [filters, priceRange.maxPrice, priceRange.minPrice, query, sortBy],
  )

  useEffect(() => {
    setPage(1)
  }, [filters, priceRange, query, sortBy])

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const visibleLaptops = results.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  )
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce(
    (total, item) => total + (Number(item.price) || 0) * item.quantity,
    0,
  )

  const activeFilterCount =
    Object.entries(filters).reduce(
      (total, [key, values]) =>
        total + (key === 'minRating' ? Number(values) > 0 : values.length),
      0,
    ) +
    Number(Boolean(priceRange.minPrice || priceRange.maxPrice)) +
    Number(Boolean(query.trim()))

  const toggleFilter = (facetId, value) => {
    setFilters((current) => {
      const selectedValues = current[facetId] || []
      const nextValues = selectedValues.includes(value)
        ? selectedValues.filter((selectedValue) => selectedValue !== value)
        : [...selectedValues, value]

      return { ...current, [facetId]: nextValues }
    })
  }

  const changePriceRange = (key, value) => {
    const clampedValue =
      value === ''
        ? ''
        : String(
            Math.min(Math.max(Number(value) || 0, priceBounds.min), priceBounds.max),
          )

    setPriceRange((current) => {
      const next = { ...current, [key]: clampedValue }

      if (key === 'minPrice' && next.maxPrice && Number(next.maxPrice) < Number(clampedValue)) {
        next.maxPrice = clampedValue
      }
      if (key === 'maxPrice' && next.minPrice && Number(next.minPrice) > Number(clampedValue)) {
        next.minPrice = clampedValue
      }

      return next
    })
  }

  const clearAllFilters = () => {
    setQuery('')
    setFilters(EMPTY_FILTERS)
    setPriceRange({ minPrice: '', maxPrice: '' })
    setSortBy('relevance')
    setMobileFiltersOpen(false)
  }

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const changeCartQuantity = (productId, change) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFilter = (facetId, value) => {
    setFilters((current) => ({
      ...current,
      [facetId]: (current[facetId] || []).filter(
        (selectedValue) => selectedValue !== value,
      ),
    }))
  }

  const activeFilterTags = facets.flatMap((facet) =>
    (filters[facet.id] || []).map((value) => ({
      key: `${facet.id}-${value}`,
      label: `${facet.label}: ${
        facet.options.find((option) => option.value === value)?.label || value
      }`,
      onRemove: () => removeFilter(facet.id, value),
    })),
  )

  if (filters.minRating) {
    activeFilterTags.push({
      key: 'min-rating',
      label: `${filters.minRating}★ & above`,
      onRemove: () =>
        setFilters((current) => ({ ...current, minRating: 0 })),
    })
  }

  if (priceRange.minPrice || priceRange.maxPrice) {
    activeFilterTags.push({
      key: 'price-range',
      label: `Price: ${formatPrice(priceRange.minPrice || priceBounds.min)} – ${formatPrice(priceRange.maxPrice || priceBounds.max)}`,
      onRemove: () => setPriceRange({ minPrice: '', maxPrice: '' }),
    })
  }

  if (query.trim()) {
    activeFilterTags.push({
      key: 'search-query',
      label: `Search: ${query.trim()}`,
      onRemove: () => setQuery(''),
    })
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-30 bg-[#2874f0] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <a href="/" className="shrink-0" aria-label="Flipkart home">
            <img
              src="/flipkart-plus_8d85f4.png"
              width="80"
              height="24"
              alt="Flipkart"
              className="h-auto w-20 object-contain"
            />
            <span className="hidden text-[10px] italic sm:block">
              Explore <span className="font-semibold text-yellow-300">Plus</span>
            </span>
          </a>

          <form
            role="search"
            className="flex min-w-0 flex-1"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="laptop-search" className="sr-only">
              Search laptops
            </label>
            <input
              id="laptop-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for laptops, brands and more"
              className="h-10 min-w-0 flex-1 rounded-l-sm border-0 bg-white px-3 text-sm text-slate-900 outline-none ring-blue-300 placeholder:text-slate-500 focus:ring-2"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="bg-white px-2 text-slate-500"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
            <Button
              type="submit"
              size="icon"
              aria-label="Search"
              className="h-10 rounded-l-none rounded-r-sm bg-white text-blue-700 hover:bg-blue-50"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
          </form>

          <Button
            type="button"
            variant="secondary"
            className="hidden h-9 px-6 font-semibold text-blue-700 sm:inline-flex"
          >
            Login
          </Button>

          <details
            open={cartOpen}
            onToggle={(event) => setCartOpen(event.currentTarget.open)}
            className="relative"
          >
            <summary className="flex h-9 cursor-pointer list-none items-center gap-2 whitespace-nowrap rounded px-2 text-sm font-semibold hover:bg-blue-600 sm:px-3">
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              Cart
              <span className="rounded-full bg-white px-1.5 py-0.5 text-xs text-blue-700">
                {cartCount}
              </span>
            </summary>
            <div className="absolute right-0 top-11 z-40 w-80 max-w-[calc(100vw-2rem)] rounded-sm border bg-white p-3 text-slate-900 shadow-xl">
              <h2 className="border-b pb-2 font-semibold">Your cart</h2>
              {cartItems.length === 0 ? (
                <p className="py-6 text-center text-sm text-slate-500">
                  Your cart is empty.
                </p>
              ) : (
                <>
                  <ul className="max-h-72 divide-y overflow-y-auto">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-3">
                        <p className="line-clamp-2 text-sm font-medium">
                          {item.name}
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold">
                            {formatPrice(Number(item.price) * item.quantity)}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name} quantity`}
                              onClick={() => changeCartQuantity(item.id, -1)}
                              className="h-7 w-7 rounded border"
                            >
                              −
                            </button>
                            <span className="min-w-4 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name} quantity`}
                              onClick={() => changeCartQuantity(item.id, 1)}
                              className="h-7 w-7 rounded border"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between border-t pt-3 font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                </>
              )}
            </div>
          </details>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-4">
        <nav aria-label="Breadcrumb" className="mb-3 text-xs text-slate-500">
          Home <span className="px-1">&gt;</span> Computers
          <span className="px-1">&gt;</span> Laptops
        </nav>

        <section className="rounded-sm border bg-white px-4 py-4 sm:px-6">
          <h1 className="text-xl font-semibold text-slate-900">Laptops</h1>
          <p className="mt-1 text-sm text-slate-500">
            Compare specifications, ratings and prices across {laptops.length.toLocaleString('en-IN')} laptops.
          </p>
        </section>

        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start">
          <div className="lg:hidden">
            <Button
              type="button"
              variant="outline"
              className="w-full bg-white"
              aria-expanded={mobileFiltersOpen}
              onClick={() => setMobileFiltersOpen((open) => !open)}
            >
              {mobileFiltersOpen ? 'Hide filters' : `Filters (${activeFilterCount})`}
            </Button>
          </div>

          <div
            className={`${mobileFiltersOpen ? 'block' : 'hidden'} w-full shrink-0 lg:block lg:w-64`}
          >
            <LaptopFilterSidebar
              facets={facets}
              filters={filters}
              priceBounds={priceBounds}
              priceRange={priceRange}
              activeFilterCount={activeFilterCount}
              onToggleFilter={toggleFilter}
              onSetRating={(minRating) =>
                setFilters((current) => ({ ...current, minRating }))
              }
              onPriceChange={changePriceRange}
              onClear={clearAllFilters}
            />
          </div>

          <section className="min-w-0 flex-1 rounded-sm border bg-white">
            <div className="border-b px-4 py-4 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Laptops
                  </h2>
                  <p className="mt-1 text-sm text-slate-500" aria-live="polite">
                    {results.length === 0
                      ? 'No products found'
                      : `Showing ${(page - 1) * PAGE_SIZE + 1}–${Math.min(
                          page * PAGE_SIZE,
                          results.length,
                        )} of ${results.length.toLocaleString('en-IN')} products`}
                  </p>
                </div>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  Sort by
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="rounded-sm border border-slate-300 bg-white px-2 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer rating</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </label>
              </div>

              {activeFilterTags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeFilterTags.map((tag) => (
                    <button
                      key={tag.key}
                      type="button"
                      onClick={tag.onRemove}
                      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700 hover:bg-blue-100"
                    >
                      {tag.label}
                      <X className="h-3 w-3" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {results.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <h3 className="text-lg font-semibold text-slate-800">
                  We couldn&apos;t find a match
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or clearing some filters.
                </p>
                <Button type="button" className="mt-5" onClick={clearAllFilters}>
                  Clear search and filters
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <AnimatePresence>
                    {visibleLaptops.map((laptop) => (
                      <LaptopCard
                        key={laptop.id}
                        laptop={laptop}
                        onAddToCart={addToCart}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                <nav
                  aria-label="Product pages"
                  className="flex items-center justify-center gap-4 border-t px-4 py-4"
                >
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage((current) => current - 1)}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-slate-600">
                    Page {page} of {pageCount}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={page >= pageCount}
                    onClick={() => setPage((current) => current + 1)}
                  >
                    Next
                  </Button>
                </nav>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default BrowseLaptop
