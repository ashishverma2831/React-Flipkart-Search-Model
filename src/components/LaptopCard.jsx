import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ImageOff, ShoppingCart, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getFacetValues } from './filterLogic'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  }).format(Number(price) || 0)

function LaptopCard({ laptop, onAddToCart }) {
  const [imageFailed, setImageFailed] = useState(false)
  const brand = getFacetValues(laptop, 'brand')[0]?.label
  const rating = Number(laptop.rating)
  const ratingCount = Number(laptop.no_of_ratings) || 0
  const reviewCount = Number(laptop.no_of_reviews) || 0

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="grid gap-4 border-b bg-white p-4 sm:grid-cols-[200px_1fr] sm:gap-6"
    >
      <div className="flex min-h-48 items-center justify-center">
        {imageFailed || !laptop.img_link ? (
          <div
            className="flex h-44 w-full items-center justify-center rounded bg-slate-50 text-slate-300"
            aria-label="Product image unavailable"
          >
            <ImageOff className="h-8 w-8" aria-hidden="true" />
          </div>
        ) : (
          <img
            src={laptop.img_link}
            alt={laptop.name}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="max-h-48 w-full object-contain"
          />
        )}
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {brand}
          </p>
          <h2 className="text-base font-medium text-slate-900 sm:text-lg">
            {laptop.name}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {rating > 0 ? (
              <span className="inline-flex items-center gap-1 rounded bg-emerald-600 px-2 py-1 font-semibold text-white">
                {rating}
                <Star className="h-3 w-3 fill-current" aria-hidden="true" />
              </span>
            ) : (
              <span className="text-slate-500">Not yet rated</span>
            )}
            <span>
              {ratingCount.toLocaleString('en-IN')} Ratings
              {reviewCount > 0 ? ` · ${reviewCount.toLocaleString('en-IN')} Reviews` : ''}
            </span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>{laptop.processor}</li>
            <li>{laptop.ram}</li>
            <li>{laptop.os}</li>
            <li>{String(laptop.storage || '').replace(/\|/g, ' + ')}</li>
            {Number.parseFloat(laptop.display) > 0 && (
              <li>{laptop.display}&quot; display</li>
            )}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
          <p className="text-2xl font-semibold text-slate-900">
            {formatPrice(laptop.price)}
          </p>
          <Button type="button" onClick={() => onAddToCart(laptop)}>
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to cart
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

LaptopCard.propTypes = {
  laptop: PropTypes.shape({
    display: PropTypes.string,
    img_link: PropTypes.string,
    name: PropTypes.string.isRequired,
    no_of_ratings: PropTypes.string,
    no_of_reviews: PropTypes.string,
    os: PropTypes.string,
    price: PropTypes.string.isRequired,
    processor: PropTypes.string,
    ram: PropTypes.string,
    rating: PropTypes.string,
    storage: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

export default LaptopCard
