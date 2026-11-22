const BRAND_LABELS = {
  alienware: 'Alienware',
  apple: 'Apple',
  asus: 'ASUS',
  avita: 'Avita',
  acer: 'Acer',
  dell: 'Dell',
  gigabyte: 'GIGABYTE',
  hp: 'HP',
  infinix: 'Infinix',
  lg: 'LG',
  lenovo: 'Lenovo',
  mi: 'Mi',
  microsoft: 'Microsoft',
  msi: 'MSI',
  nokia: 'Nokia',
  realme: 'realme',
  redmibook: 'RedmiBook',
  samsung: 'SAMSUNG',
  ultimus: 'Ultimus',
  vaio: 'VAIO',
}

const FACET_DEFINITIONS = [
  { id: 'brand', label: 'Brand' },
  { id: 'processorBrand', label: 'Processor brand' },
  { id: 'processor', label: 'Processor' },
  { id: 'processorGeneration', label: 'Processor generation' },
  { id: 'ram', label: 'RAM' },
  { id: 'ramType', label: 'RAM type' },
  { id: 'storageType', label: 'Storage type' },
  { id: 'storageCapacity', label: 'Storage capacity' },
  { id: 'operatingSystem', label: 'Operating system' },
  { id: 'displaySize', label: 'Screen size' },
]

const PROCESSOR_FAMILIES = [
  [/intel core i3/i, 'Intel Core i3'],
  [/intel core i5/i, 'Intel Core i5'],
  [/intel core i7/i, 'Intel Core i7'],
  [/intel core i9/i, 'Intel Core i9'],
  [/amd ryzen 3/i, 'AMD Ryzen 3'],
  [/amd ryzen 5/i, 'AMD Ryzen 5'],
  [/amd ryzen 7/i, 'AMD Ryzen 7'],
  [/amd ryzen 9/i, 'AMD Ryzen 9'],
  [/apple m1/i, 'Apple M1'],
  [/apple m2/i, 'Apple M2'],
  [/apple m3/i, 'Apple M3'],
  [/intel celeron/i, 'Intel Celeron'],
  [/intel pentium/i, 'Intel Pentium'],
  [/amd athlon/i, 'AMD Athlon'],
  [/qualcomm snapdragon/i, 'Qualcomm Snapdragon'],
]

const toNumber = (value) => {
  const number = Number.parseFloat(String(value ?? '').replace(/,/g, ''))
  return Number.isFinite(number) ? number : 0
}

const normalize = (value) => String(value ?? '').trim().toLowerCase()

const brandValue = (laptop) =>
  normalize(laptop.name).split(/\s+/)[0] || 'other'

const brandLabel = (value) =>
  BRAND_LABELS[value] ||
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`

const processorFamily = (laptop) => {
  const processor = normalize(laptop.processor)
  const match = PROCESSOR_FAMILIES.find(([pattern]) => pattern.test(processor))

  if (match) {
    return match[1]
  }

  return laptop.processor ? 'Other' : null
}

const processorBrand = (laptop) => {
  const processor = String(laptop.processor ?? '')
  const match = processor.match(/\b(Intel|AMD|Apple|Qualcomm)\b/i)

  return match ? match[1] : laptop.processor ? 'Other' : null
}

const processorGeneration = (laptop) => {
  const generation = String(laptop.processor ?? '').match(
    /\b(\d+(?:st|nd|rd|th)\s+Gen)\b/i,
  )?.[1]

  return generation ? `${generation.split(/\s+/)[0]} Gen` : null
}

const ramType = (laptop) => {
  const type = String(laptop.ram ?? '').match(
    /\b(DDR\d|LPDDR\dX?|Unified Memory)\b/i,
  )?.[1]

  if (!type) return laptop.ram ? 'Other' : null

  return type.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

const storageCapacities = (laptop) => {
  const capacities = new Set()
  const storage = String(laptop.storage ?? '')
  const expression = /(\d+(?:\.\d+)?)\s*(TB|GB)\b/gi
  let match = expression.exec(storage)

  while (match) {
    const gigabytes =
      Number(match[1]) * (match[2].toUpperCase() === 'TB' ? 1024 : 1)

    capacities.add(String(Math.round(gigabytes)))
    match = expression.exec(storage)
  }

  return [...capacities]
}

const storageCapacityLabel = (gigabytes) => {
  const value = Number(gigabytes)
  return value >= 1024
    ? `${value / 1024} TB`
    : `${value} GB`
}

const operatingSystemFamily = (laptop) => {
  const operatingSystem = normalize(laptop.os)

  if (operatingSystem.includes('windows')) return 'Windows'
  if (operatingSystem.includes('mac')) return 'macOS'
  if (operatingSystem.includes('chrome')) return 'ChromeOS'
  if (operatingSystem.includes('linux')) return 'Linux'
  if (operatingSystem.includes('dos')) return 'DOS'

  return laptop.os ? 'Other' : null
}

export function getFacetValues(laptop, facetId) {
  switch (facetId) {
    case 'brand':
      return [{ value: brandValue(laptop), label: brandLabel(brandValue(laptop)) }]
    case 'processorBrand': {
      const brand = processorBrand(laptop)
      return brand
        ? [{ value: normalize(brand), label: brand }]
        : []
    }
    case 'processor': {
      const family = processorFamily(laptop)
      return family ? [{ value: normalize(family), label: family }] : []
    }
    case 'processorGeneration': {
      const generation = processorGeneration(laptop)
      return generation
        ? [{ value: normalize(generation), label: generation }]
        : []
    }
    case 'ram': {
      const capacity = String(laptop.ram ?? '').match(/(\d+)\s*GB/i)?.[1]
      return capacity
        ? [{ value: capacity, label: `${capacity} GB` }]
        : []
    }
    case 'ramType': {
      const type = ramType(laptop)
      return type ? [{ value: normalize(type), label: type }] : []
    }
    case 'storageType':
      return ['SSD', 'HDD']
        .filter((type) => new RegExp(`\\b${type}\\b`, 'i').test(laptop.storage ?? ''))
        .map((type) => ({ value: type.toLowerCase(), label: type }))
    case 'storageCapacity':
      return storageCapacities(laptop).map((capacity) => ({
        value: capacity,
        label: storageCapacityLabel(capacity),
      }))
    case 'operatingSystem': {
      const family = operatingSystemFamily(laptop)
      return family
        ? [{ value: normalize(family), label: family }]
        : []
    }
    case 'displaySize': {
      const display = Number.parseFloat(laptop.display)
      return Number.isFinite(display)
        ? [{ value: String(display), label: `${display}"` }]
        : []
    }
    default:
      return []
  }
}

export function getFilterFacets(laptops) {
  return FACET_DEFINITIONS.map(({ id, label }) => {
    const options = new Map()

    laptops.forEach((laptop) => {
      const values = new Map(
        getFacetValues(laptop, id).map(({ value, label: optionLabel }) => [
          value,
          optionLabel,
        ]),
      )

      values.forEach((optionLabel, value) => {
        const current = options.get(value) || {
          value,
          label: optionLabel,
          count: 0,
        }
        current.count += 1
        options.set(value, current)
      })
    })

    return {
      id,
      label,
      options: [...options.values()].sort((first, second) => {
        if (id === 'ram' || id === 'storageCapacity' || id === 'displaySize') {
          return Number(first.value) - Number(second.value)
        }
        return first.label.localeCompare(second.label)
      }),
    }
  })
}

export function getPriceBounds(laptops) {
  const prices = laptops.map((laptop) => toNumber(laptop.price)).filter(Boolean)

  return {
    min: prices.length ? Math.min(...prices) : 0,
    max: prices.length ? Math.max(...prices) : 0,
  }
}

export function filterLaptops(
  laptops,
  {
    query = '',
    filters = {},
    minPrice = '',
    maxPrice = '',
    sortBy = 'relevance',
  } = {},
) {
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  const minimumPrice = minPrice === '' ? null : toNumber(minPrice)
  const maximumPrice = maxPrice === '' ? null : toNumber(maxPrice)

  const results = laptops.filter((laptop) => {
    const searchableText = normalize(
      [
        laptop.name,
        laptop.processor,
        laptop.ram,
        laptop.os,
        laptop.storage,
      ].join(' '),
    )

    if (!terms.every((term) => searchableText.includes(term))) return false

    for (const [facetId, selectedValues] of Object.entries(filters)) {
      if (facetId === 'minRating' || !selectedValues?.length) continue

      const productValues = getFacetValues(laptop, facetId)
      if (!productValues.some(({ value }) => selectedValues.includes(value))) {
        return false
      }
    }

    const price = toNumber(laptop.price)
    if (minimumPrice !== null && price < minimumPrice) return false
    if (maximumPrice !== null && price > maximumPrice) return false
    if (toNumber(laptop.rating) < toNumber(filters.minRating)) return false

    return true
  })

  if (sortBy === 'price-low') {
    results.sort((first, second) => toNumber(first.price) - toNumber(second.price))
  } else if (sortBy === 'price-high') {
    results.sort((first, second) => toNumber(second.price) - toNumber(first.price))
  } else if (sortBy === 'rating') {
    results.sort((first, second) => toNumber(second.rating) - toNumber(first.rating))
  } else if (sortBy === 'popularity') {
    results.sort(
      (first, second) =>
        toNumber(second.no_of_ratings) - toNumber(first.no_of_ratings),
    )
  }

  return results
}
