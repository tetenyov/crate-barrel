import { ShipStatuses } from '../constants/constants'
import { getGoodsWithImg } from '../util/util'

export const VasesNoImg = [
  {
    sku: 559546,
    category: 'vases',
    name: 'Ashland Rust and Teal Ceramic Vase with Handle',
    price: 4211,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Our Ashland vase brings the ancient amphora vase into 
      the modern age with asymmetrical handles and fascinating 
      finishes. Made of terracotta, the top portion of the urn-shaped vase 
      displays a craggy, rust-colored finish reminiscent of an archeological find. 
      In dramatic contrast, the glossy bottom transitions from teal to green in a 
      unique display of reactive glaze.`,
    details: [
      'Handcrafted', 'Glazed terracotta', 'For decorative use only; not watertight',
      'Wipe clean with damp cloth', 'Made in Portugal'
      ],
    dimensions: {
      width: `8,86"`,
      depth: `8,86"`,
      height: `12,6"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 560344,
    category: 'vases',
    name: 'Poe Large Amber Glass Vase',
    price: 4211,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Our handcrafted Poe vase makes a beautiful statement in recycled glass. 
      The rich amber color transitions from dark to light, drawing attention to 
      the vase's strikingly simple bottle silhouette. Beautiful on its own, this 
      modern beauty also makes a lovely companion to a fresh-picked bouquet or tropical 
      leaf stem.`,
    details: [
      'Handcrafted', 'Recycled glass', 'Hand wash',
      'Made in Mexico'
      ],
    dimensions: {
      width: `5"`,
      depth: `12"`,
      height: `10"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 559905,
    category: 'vases',
    name: 'Leavitt Mini Jug Vase',
    price: 1513,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Our contemporary take on a classic vase style, our miniature-sized 
      Leavitt vase accents side tables and bookcases with cool minimalism. 
      Playfully proportioned with asymmetrical handles, the terracotta vase is 
      glossed with a neutral-colored reactive glaze. Striking on its own, the mini 
      jug also looks amazing grouped with other handcrafted ceramic vases in our 
      collection.`,
    details: [
      'Handcrafted', 'Glazed terracotta', 'For decorative use only; not watertight',
      'Made in Portugal'
      ],
    dimensions: {
      width: `5.12"`,
      depth: `4.53"`,
      height: `5.51"`
    },
    img: ['', '', '']
  },
  {
    sku: 207415,
    category: 'vases',
    name: 'Lati Vase',
    price: 3115,
    newArrival: false,
    exclusive: true,
    ship: ShipStatuses.unavailable,
    overview: 
      `Hand formed on a potter's wheel, the Lati vase is handcrafted in the 
      Philippines from locally sourced clay. Incised with alternating straight 
      and inclined lines, the cream-glazed vase has a rustic, modern feel. 
      Use with dried botanicals or one of our lifelike floral sprays.`,
    details: [
      'Handcrafted', 'Glazed ceramic', 'Wipe clean with dry cloth',
      'Made in The Philippines'
      ],
    dimensions: {
      height: `12"`,
      diameter: `6.5"`
    },
    img: ['', '', '', '', '']
  },
  {
    sku: 207472,
    category: 'vases',
    name: 'Taline Vase',
    price: 5054,
    newArrival: false,
    exclusive: true,
    ship: ShipStatuses.unavailable,
    overview: 
      `White glaze showcases the depth and texture of the Taline vase's flower-shaped 
      impressions, organically revealing glimpses of the dark stoneware beneath. 
      Finished and glazed by hand, this Crate and Barrel exclusive adds an artisanal 
      touch to any room in the house. Fill our striking watertight vase with live 
      flowering branches or broad tropical leaves, or any of our tall faux botanicals. 
      due to its handcrafted nature, each Taline vase will be slightly unique.`,
    details: [
      'Taline Vase. 7.5" dia. x 17.75"H'
      ],
    dimensions: {
      height: `17.75"`,
      diameter: `7.5"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 560303,
    category: 'vases',
    name: 'Sundown Metal Vase',
    price: 3367,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.inStock,
    overview: 
      `Subtly textured aluminum goes gold in our brushed brass vase. A wide, 
      flat lip tops the round vessel for a dramatic silhouette. Display on a 
      bookshelf or mantel as a gleaming objet d'art, or fill with a lush 
      arrangement of real or faux botanicals. Our Sundown metal vase is a 
      Crate and Barrel exclusive.`,
    details: [
      'Aluminum with brushed brass finish', 'Watertight',
      'Wipe clean with damp cloth', 'Made in India'
      ],
    dimensions: {
      width: `6"`,
      depth: `6"`,
      height: `5"`
    },
    img: ['', '']
  },
  {
    sku: 198765,
    category: 'vases',
    name: 'Holden Vase',
    price: 4211,
    newArrival: false,
    exclusive: true,
    ship: ShipStatuses.unavailable,
    overview: 
      `Mid-century angles get the run around in ribbed earthenware vase, 
      finished with a creamy white reactive glaze that showers speckles 
      all over. Bottle-shaped design is perfectly shaped to corral 
      a handful of dried stems.`,
    details: [
      'Earthenware', 'Hand wash',
      'Not watertight; for decorative use only', 'Made in Portugal'
      ],
    dimensions: {
      height: `11.5"`,
      diameter: `7.5"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 560275,
    category: 'vases',
    name: 'Euclid Spotted Large White Vase',
    price: 3367,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Rustically shaped and uniquely patterned, this elongated bottle 
      vase showcases the magic of reactive glaze. From pits to speckles 
      to bands of nuanced color on cream, Euclid fascinates with its 
      range of decorative effects, unique to each vase. Stunning enough 
      to go solo, the handcrafted vase also groups with other handcrafted 
      ceramics in our collection for a striking display.`,
    details: [
      'Handcrafted', 'Earthenware with reactive glaze',
      'Watertight', 'Wipe clean with damp cloth'
      ],
    dimensions: {
      width: `2.75"`,
      depth: `2.75"`,
      height: `14.5"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 565883,
    category: 'vases',
    name: 'Scoville Small Tan and Blue Vase',
    price: 2524,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Intriguing color and rustic texture give this minimalist vase 
      its artisanal appeal. Small in size, the
      handcrafted vase makes quite a statement
      with uniquely speckled tan reactive glaze and
      etched marks colored a pale robin's egg blue. 
      Striking on its own, Scoville also looks amazing
      grouped with other handcrafted ceramic vases 
      in our collection.`,
    details: [
      'Handcrafted', 'Glazed terracotta',
      'Watertight', 'Made in Portugal'
      ],
    dimensions: {
      height: `8.27"`,
      diameter: `6.3"`
    },
    img: ['', '', '', '', '', '']
  },
  {
    sku: 527750,
    category: 'vases',
    name: 'Rati Vase',
    price: 2103,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.inStock,
    overview: 
      `Boldly patterned African textiles emerge dimensional and geometric in 
      faceted terra cotta vase. Crisp white glaze brings hand-carved texture 
      into sculptural relief, while exposed clay at top and bottom add rustic contrast.`,
    details: [
      'Handmade', 'Terra cotta',
      'Watertight', 'Hand wash', 'Made in The Philippines'
      ],
    dimensions: {
      height: `7.5"`,
      diameter: `6.25"`
    },
    img: ['', '', '', '', '']
  },
  {
    sku: 454835,
    category: 'vases',
    name: 'Alura Cream Open Vase',
    price: 5897,
    newArrival: false,
    exclusive: true,
    ship: ShipStatuses.inStock,
    overview: 
      `This dramatically different vase shapes a textured ring of cream-colored porcelain. 
      Stunning on its own, the watertight vase has a small opening at the top to host a 
      tropical leaf or single bloom. Pairs with our deeply textured tall Alura vase.`,
    details: [
      'Porcelain', 'Made in Thailand', 'Watertight'
      ],
    dimensions: {
      width: `14"`,
      depth: `5.25"`,
      height: `10.5"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 559197,
    category: 'vases',
    name: 'Percy Teal Ceramic Vase',
    price:  2946,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Shaped as a tall cylinder with an angled collar, our handcrafted 
      Percy vase stands out in gorgeous teal. The silky yet matte glaze 
      calls out the shadows and highlights, making the most of the dramatically 
      simple silhouette. We love it on its own or grouped with textured vases 
      in our collection for display-worthy contrast.
      `,
    details: [
      'Handcrafted', 'Glazed earthenware', 'Watertight',
      'Wipe clean with damp cloth', 'Made in Portugal'
      ],
    dimensions: {
      width: `4.72"`,
      depth: `4.72"`,
      height: `113.58"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 560140,
    category: 'vases',
    name: 'Field Geo Pot with Speckles',
    price:  2946,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.limited,
    overview: 
      `Our Field Geo pot tempers its angled profile with rippled texture 
      and a riot of expressive speckles. Each wide-mouthed pot is decorated 
      by hand with a white reactive glaze and black swishes and splatters. 
      Eye-catching enough on its own, the pot also hosts dried botanicals 
      or acts as a cachepot for leafy houseplants.
      `,
    details: [
      'Handcrafted', 'Earthenware with reactive glazes', 'Watertight',
      'Wipe clean with damp cloth', 'Made in Portugal'
      ],
    dimensions: {
      width: `6.5"`,
      depth: `6.5"`,
      height: `6.89"`
    },
    img: ['', '', '']
  },
  {
    sku: 559005,
    category: 'vases',
    name: 'Myron Large Speckled Vase',
    price:  4211,
    newArrival: true,
    exclusive: true,
    ship: ShipStatuses.inStock,
    overview: 
      `Skilled artisans layer matte and reactive glazes layer to create 
      a vase richly speckled in navy and orange over washes of white and brown. 
      With a palette at once fresh and retro, the vase's artisan presence stands 
      on its own on a bookshelf or mantel. Or fill with stems of fresh foliage 
      and flowers. Our Myron large speckled vase is a Crate and Barrel exclusive. 
      Due to its reactive glazes and handcrafted nature, each one is unique.
      `,
    details: [
      'Handcrafted', 'Stoneware with reactive glazes', 'Watertight',
      'Wipe clean with damp cloth', 'Made in Portugal'
      ],
    dimensions: {
      height: `9"`,
      diameter: `8.5"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 679440,
    category: 'vases',
    name: 'Alura Short Dark Grey Oval Ceramic Vase',
    price:  7583,
    newArrival: false,
    exclusive: true,
    ship: ShipStatuses.inStock,
    overview: 
      `Scratched lines texture the oblong contours of this contemporary oval 
      ceramic vase finished in dark grey. A slit of an opening perfectly positions
       a sprig or two of dried botanicals. Pair with Alura tall vase in warm grey.
      `,
    details: [
      'Porcelain', 'Wipe clean with soft, dry cloths', 'Watertight', 'Made in Thailand'
      ],
    dimensions: {
      width: `14"`,
      depth: `6.75"`,
      height: `12.5"`
    },
    img: ['', '', '', '']
  },
  {
    sku: 315786,
    category: 'vases',
    name: 'Hayes Black Marble Wine Cooler',
    price:  3789,
    newArrival: false,
    exclusive: true,
    ship: ShipStatuses.inStock,
    overview: 
      `Inlaid with brass, our gorgeous black marble wine cooler makes a stunning
       container for keeping wine cool. Coordinates with matching Hayes cheese
       knife set and serving board. As a natural product, each cooler will vary
       slightly and as a porous substance will stain if spills are allowed to sit.
       You can also put this beauty to use as a vase for cut flowers.
      `,
    details: [
      'Polished black marble', 'Hand wash; wipe spills immediately', 'Made in India'
      ],
    dimensions: {
      height: `7"`,
      diameter: `4.5"`
    },
    img: ['', '', '', '', '']
  },
]

export const vases = getGoodsWithImg(VasesNoImg)
