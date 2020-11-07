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
}
