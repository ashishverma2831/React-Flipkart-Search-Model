import assert from 'node:assert/strict'
import test from 'node:test'

import {
  filterLaptops,
  getFacetValues,
  getFilterFacets,
} from './filterLogic.js'

const catalog = [
  {
    id: 'acer-1',
    name: 'Acer Nitro Gaming Laptop',
    price: '45000',
    processor: 'Intel Core i5 Processor (12th Gen)',
    ram: '16 GB DDR4 RAM',
    os: 'Windows 11 Operating System',
    storage: '1 TB HDD|512 GB SSD',
    display: '15.6',
    rating: '4.5',
    no_of_ratings: '120',
  },
  {
    id: 'acer-2',
    name: 'Acer Aspire Laptop',
    price: '32000',
    processor: 'Intel Core i3 Processor (11th Gen)',
    ram: '8 GB DDR4 RAM',
    os: 'Windows 11 Operating System',
    storage: '256 GB SSD',
    display: '14',
    rating: '4.1',
    no_of_ratings: '80',
  },
  {
    id: 'apple-1',
    name: 'Apple MacBook Air',
    price: '90000',
    processor: 'Apple M2 Processor',
    ram: '8 GB Unified Memory RAM',
    os: 'Mac OS Operating System',
    storage: '256 GB SSD',
    display: '13.6',
    rating: '4.8',
    no_of_ratings: '300',
  },
]

test('combines search, brand, processor, rating, and price filters', () => {
  const results = filterLaptops(catalog, {
    query: 'acer intel',
    filters: {
      brand: ['acer'],
      processor: ['intel core i5'],
      minRating: 4,
    },
    minPrice: '40000',
    maxPrice: '50000',
  })

  assert.deepEqual(results.map((laptop) => laptop.id), ['acer-1'])
})

test('uses OR within a facet and AND between different facets', () => {
  const results = filterLaptops(catalog, {
    filters: {
      brand: ['acer', 'apple'],
      storageType: ['hdd'],
      minRating: 0,
    },
  })

  assert.deepEqual(results.map((laptop) => laptop.id), ['acer-1'])
})

test('parses combined HDD/SSD capacities into separate selectable values', () => {
  assert.deepEqual(
    getFacetValues(catalog[0], 'storageCapacity').map(({ value }) => value),
    ['1024', '512'],
  )
  assert.deepEqual(
    getFacetValues(catalog[0], 'storageType').map(({ value }) => value),
    ['ssd', 'hdd'],
  )
})

test('derives processor generation, processor brand, and memory type facets', () => {
  assert.deepEqual(
    getFacetValues(catalog[0], 'processorBrand').map(({ label }) => label),
    ['Intel'],
  )
  assert.deepEqual(
    getFacetValues(catalog[0], 'processorGeneration').map(({ label }) => label),
    ['12th Gen'],
  )
  assert.deepEqual(
    getFacetValues(catalog[0], 'ramType').map(({ label }) => label),
    ['DDR4'],
  )
})

test('sorts prices and ratings numerically rather than lexicographically', () => {
  assert.deepEqual(
    filterLaptops(catalog, { sortBy: 'price-low' }).map((laptop) => laptop.id),
    ['acer-2', 'acer-1', 'apple-1'],
  )
  assert.deepEqual(
    filterLaptops(catalog, { sortBy: 'rating' }).map((laptop) => laptop.id),
    ['apple-1', 'acer-1', 'acer-2'],
  )
})

test('builds dynamic facet options and counts from the catalog', () => {
  const brandFacet = getFilterFacets(catalog).find(
    (facet) => facet.id === 'brand',
  )

  assert.deepEqual(
    brandFacet.options.map(({ value, count }) => [value, count]),
    [
      ['acer', 2],
      ['apple', 1],
    ],
  )
})
