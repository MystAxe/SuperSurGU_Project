const products = [
  {
    "article": 1,
    "title": "День-ночь",
    "descr": "Две подвески, излучающие собой теплые солнечные лучи и невозмутимое спокойствие ночи. Идеальный баланс природы на вашем теле.",
    "gallery": "catalog/p4.jpg",
    "price": 1000,
  },
  {
    "article": 2,
    "title": "Цветение",
    "descr": "Цветочный шар будет прекрасным дополнением к вашему рабочему столу. Ощущение лета не будет вас покидать даже в самые холодные зимние вечера.",
    "gallery": "catalog/p1.jpg",
    "price": 500,
  },
  {
    "article": 3,
    "title": "Голубая лагуна",
    "descr": "Подвеска, способная перенести ваш дух к морю, пляжу, который усыпан самыми разными красочными сухоцветами.",
    "gallery": "catalog/p8.jpg",
    "price": 500,
  },
  {
    "article": 4,
    "title": "Цветочная плита",
    "descr": "Не самая выразительная, но в то же время невероятно притягивающая внимание подвеска с лепестками будет прекрасно смотреться на декольте под вечернее платье.",
    "gallery": "catalog/p9.jpg",
    "price": 500,
  },
  {
    "article": 5,
    "title": "Гитара",
    "descr": "Три различных подвески для любителей яркой и громкой музыки. Любители рока не смогут пройти мимо, не подметив такое украшение.",
    "gallery": "catalog/p7.jpg",
    "price": 1500,
  },
  {
    "article": 6,
    "title": "???",
    "descr": "Черный параллелепипед",
    "gallery": "catalog/p3.jpg",
    "price": 500,
  },
  {
    "article": 7,
    "title": "Лунное сияние",
    "descr": "Простая с первого взгляда, но такая сложная для настоящих ценителей, подвеска, поражающая глубиной цвета.",
    "gallery": "catalog/p5.jpg",
    "price": 1000,
  },
  {
    "article": 8,
    "title": "Свежесть хвои",
    "descr": "Шишка внутри куба из смолы олицетворяет осенний хвойный лес, свежесть ели и аромат шишек.",
    "gallery": "catalog/p2.jpg",
    "price": 2000,
  },
  {
    "article": 9,
    "title": "Наташа",
    "descr": "Однажды подарив такую подвеску даме своего сердца, она не сможет вам отказать.",
    "gallery": "catalog/p10.jpg",
    "price": 1000,
  },
  {
    "article": 10,
    "title": "Кольцо власти",
    "descr": "Ходят слухи, что именно одно из этих колец Голум величал своей прелестью. Рискните угадать, какое из них принадлежало ему.",
    "gallery": "catalog/p11.jpg",
    "price": 1500,
  },
]

function getProducts(query?: string) {
  let rawData = products
  if(query) {
    rawData = products.filter(i=>i.title.toLowerCase().startsWith(query.toLowerCase()))
  }
  return {
    items: rawData, 
  }
}

export const api = {
  getProducts
}

export interface IProduct {
  article: number,
  title: string,
  descr: string,
  gallery: string,
  price: number,
}