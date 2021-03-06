export const getGoodsWithImg = (category) => {
  return (
    category.map(item => {
      const arrOfSrc = Array.from({length: item.img.length}, (el, i) => {
        return `/img/goods/vases/${item.sku}-${i + 1}.jpeg`
      })
      item.img = arrOfSrc
      return item
    })
  )
};

export const getCounter = (item, arrayOfItems) => {
  if (!arrayOfItems || !arrayOfItems.includes(item)) return 0

  return arrayOfItems.reduce((acc, curr) => curr === item ? acc + 1 : acc, 0)
};

export const getFirstLetterCaps = (str) => str[0].toUpperCase() + str.slice(1);

export const getButtonClassName = (active, current) => {
  return active === current 
    ? 'current-item__details-list-button active'
    : 'current-item__details-list-button'
};

export const getPreviewClassName = (currentImage, src) => {
  return currentImage.includes(src)
    ? 'previews-list__item previews-list__item--active'
    : 'previews-list__item'
};

export const getMatchingGoods = (goods, query) => {
  return goods && goods.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase())
        || item.overview.toLowerCase().includes(query.toLowerCase())
          || item.details.join('').toLowerCase().includes(query.toLowerCase())
    )
  })
};

export const getOrderTotal = (allGoods, inCart) => {
  if (!allGoods || !inCart) return 0

  return inCart.reduce((acc, curr) => {
    const item = allGoods.find(good => good.sku === curr)
    const price = item.price

    return acc + price
  }, 0).toLocaleString()
}
