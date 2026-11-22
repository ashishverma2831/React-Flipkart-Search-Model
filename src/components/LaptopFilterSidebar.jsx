import PropTypes from 'prop-types'
import { RotateCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'

const RATING_OPTIONS = [0, 5, 4, 3, 2, 1]

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(price)

function LaptopFilterSidebar({
  facets,
  filters,
  priceBounds,
  priceRange,
  activeFilterCount,
  onToggleFilter,
  onSetRating,
  onPriceChange,
  onClear,
}) {
  return (
    <aside className="h-fit rounded-sm border bg-white text-slate-900">
      <div className="flex items-center justify-between border-b px-4 py-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={activeFilterCount === 0}
          onClick={onClear}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Clear all
        </Button>
      </div>

      <section className="border-b px-4 py-4" aria-labelledby="price-filter">
        <h3 id="price-filter" className="mb-3 text-sm font-semibold uppercase">
          Price
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-xs text-slate-600">
            Minimum (₹)
            <input
              type="number"
              min="0"
              max={priceBounds.max}
              step="1000"
              value={priceRange.minPrice}
              placeholder={String(priceBounds.min)}
              onChange={(event) => onPriceChange('minPrice', event.target.value)}
              className="mt-1 w-full rounded-sm border border-slate-300 px-2 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>
          <label className="text-xs text-slate-600">
            Maximum (₹)
            <input
              type="number"
              min="0"
              max={priceBounds.max}
              step="1000"
              value={priceRange.maxPrice}
              placeholder={String(priceBounds.max)}
              onChange={(event) => onPriceChange('maxPrice', event.target.value)}
              className="mt-1 w-full rounded-sm border border-slate-300 px-2 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Catalog range: ₹{formatPrice(priceBounds.min)} – ₹{formatPrice(priceBounds.max)}
        </p>
      </section>

      {facets.map((facet) => (
        <details
          key={facet.id}
          open={facet.id === 'brand'}
          className="border-b px-4 py-3"
        >
          <summary className="cursor-pointer list-none py-1 text-sm font-semibold">
            {facet.label}
          </summary>
          <fieldset className="mt-2 max-h-56 space-y-2 overflow-y-auto">
            <legend className="sr-only">{facet.label}</legend>
            {facet.options.map((option) => {
              const inputId = `${facet.id}-${option.value.replace(/[^a-z0-9]+/gi, '-')}`
              const checked = (filters[facet.id] || []).includes(option.value)

              return (
                <label
                  key={option.value}
                  htmlFor={inputId}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleFilter(facet.id, option.value)}
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="flex-1">{option.label}</span>
                  <span className="text-xs text-slate-400">{option.count}</span>
                </label>
              )
            })}
          </fieldset>
        </details>
      ))}

      <fieldset className="px-4 py-4">
        <legend className="mb-3 text-sm font-semibold uppercase">
          Customer rating
        </legend>
        <div className="space-y-2">
          {RATING_OPTIONS.map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
            >
              <input
                type="radio"
                name="minimum-rating"
                checked={Number(filters.minRating || 0) === rating}
                onChange={() => onSetRating(rating)}
                className="h-4 w-4 accent-blue-600"
              />
              <span>{rating === 0 ? 'All ratings' : `${rating}★ & above`}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  )
}

LaptopFilterSidebar.propTypes = {
  activeFilterCount: PropTypes.number.isRequired,
  facets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object.isRequired,
  onClear: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onSetRating: PropTypes.func.isRequired,
  onToggleFilter: PropTypes.func.isRequired,
  priceBounds: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
  priceRange: PropTypes.shape({
    maxPrice: PropTypes.string.isRequired,
    minPrice: PropTypes.string.isRequired,
  }).isRequired,
}

export default LaptopFilterSidebar
