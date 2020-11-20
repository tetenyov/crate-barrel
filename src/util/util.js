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

export const getCounter = (item, array) => {
  return array.reduce((acc, curr) => {
    return curr === item ? acc + 1 : acc
  }, 0)
};

export const getFirstLetterCaps = (str) => str[0].toUpperCase() + str.slice(1);

export const getButtonClassName = (active, current) => {
  return active === current 
    ? 'current-item__details-list-button active'
    : 'current-item__details-list-button'
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
