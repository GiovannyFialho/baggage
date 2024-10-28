import { Bag } from "@/app/entities/Bag";

const bags = [
  {
    id: 1,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/l/u/lugano.az.jpg",
    name: "Mala de Bordo Swiss Go Londres",
    description:
      "Mala de bordo prática com cadeado integrado e rodas com giro 360º. Ideal para viagens seguras.",
    price: "$216,50"
  },
  {
    id: 2,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/p/o/po21052p-m_1.jpg",
    name: "Mala Média Samsonite Preta",
    description:
      "Mala média, estrutura leve e resistente, com rodas giratórias e cadeado TSA integrado.",
    price: "$320,00"
  },
  {
    id: 3,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/p/o/po21052v-p_.jpg",
    name: "Mala Expansível Gênova Azul",
    description:
      "Mala expansível, design elegante, com zíper reforçado e compartimento para laptop.",
    price: "$275,99"
  },
  {
    id: 4,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/p/o/po21052jpr2.jpg",
    name: "Mala de Viagem Delsey 4 Rodas",
    description:
      "Design clássico, leve e robusto, com quatro rodas multidirecionais e divisórias internas.",
    price: "$450,50"
  },
  {
    id: 5,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/y/s/ys21067pa-pp_1__2.jpg",
    name: "Mala de Rodinhas Executiva Preta",
    description:
      "Mala executiva compacta, ideal para viagens de negócios, com alça retrátil e cadeado embutido.",
    price: "$189,99"
  },
  {
    id: 6,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/y/s/ys21165-p_1_.jpg",
    name: "Mala Grande Santino Vermelha",
    description:
      "Espaçosa, com compartimentos organizados e fechamento seguro. Rodas giratórias e alça ergonômica.",
    price: "$499,00"
  },
  {
    id: 7,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/s/d/sdv502m01.jpg",
    name: "Mala de Viagem Batiki",
    description:
      "Mala prática e leve, com zíperes reforçados e acabamento resistente. Ideal para viagens curtas.",
    price: "$239,90"
  },
  {
    id: 8,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/y/s/ys21204l_1.jpg",
    name: "Mala Rígida Travelux Azul",
    description:
      "Feita de material rígido para proteção extra, com cadeado embutido e quatro rodas.",
    price: "$380,75"
  },
  {
    id: 9,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/1/3/132885-1041_.jpg",
    name: "Mala de Bordo Executiva Preta",
    description:
      "Compacta e moderna, com compartimentos para notebook e documentos. Ideal para viagens de negócios.",
    price: "$280,60"
  },
  {
    id: 10,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/t/x/tx5555a-m_1.jpg",
    name: "Mala Grande Polo King",
    description:
      "Modelo robusto e espaçoso, com acabamento premium e sistema de rodinhas giratórias.",
    price: "$420,00"
  },
  {
    id: 11,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/1/3/133999_1041_.jpg",
    name: "Mala Viagem Master Preta",
    description:
      "Ideal para viagens longas, feita com material de alta durabilidade e rodas com giro 360º.",
    price: "$470,99"
  },
  {
    id: 12,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/t/x/tx2123ve-m_.jpg",
    name: "Mala Pequena Qualitex Rosa",
    description:
      "Compacta e charmosa, com alça ajustável e design exclusivo para viagens curtas.",
    price: "$199,90"
  },
  {
    id: 13,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/1/3/134000-1694__1.jpg",
    name: "Mala Média Primicia Prata",
    description:
      "Modelo resistente e leve, com acabamento metálico e divisórias internas.",
    price: "$355,75"
  },
  {
    id: 14,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/b/a/baden_-_prata_-_p_.jpg",
    name: "Mala Samsonite Expansível",
    description:
      "Material leve e resistente, expansível para mais espaço e sistema de cadeado TSA.",
    price: "$399,00"
  },
  {
    id: 15,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/y/s/ys21205a_1.jpg",
    name: "Mala Executiva Luxcel Azul",
    description:
      "Mala executiva elegante, com compartimento para laptop e rodinhas silenciosas.",
    price: "$279,80"
  },
  {
    id: 16,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/t/x/tx2123l-g__1.jpg",
    name: "Mala Pequena Kipling Preta",
    description:
      "Compacta e resistente, ideal para viagens de curta duração e com alça acolchoada.",
    price: "$210,50"
  },
  {
    id: 17,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/b/a/baden_-_prata_-_m.jpg",
    name: "Mala de Bordo ABS Vermelha",
    description:
      "Material ABS de alta resistência, com rodinhas giratórias e alça telescópica.",
    price: "$260,30"
  },
  {
    id: 18,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/p/o/po21052g_018_1.jpg",
    name: "Mala Grande Hardside Cinza",
    description:
      "Estrutura rígida e durável, com cadeado de segurança e rodas que giram 360º.",
    price: "$499,99"
  },
  {
    id: 19,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/t/x/txpp005p-p_1_.jpg",
    name: "Mala Média Polo Travel",
    description:
      "Modelo leve e expansível, com divisórias organizadoras e alça ergonômica.",
    price: "$310,60"
  },
  {
    id: 20,
    thumb:
      "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/1/3/134001-1041_1.jpg",
    name: "Mala Grande Santino com 4 Rodas",
    description:
      "Modelo espaçoso com alta capacidade, ideal para viagens longas. Material resistente e fechamento seguro.",
    price: "$590,30"
  }
];

export const fetchBags = async (query = ""): Promise<Bag[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredBags = bags.filter((bag) =>
    bag.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return [...filteredBags];
};

export const addBag = async (
  bag: Pick<Bag, "name" | "thumb" | "description" | "price">
): Promise<Bag> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newBag = {
    id: bags.length + 1,
    thumb: bag.thumb,
    name: bag.name,
    description: bag.description,
    price: bag.price
  };

  bags.push(newBag);

  return newBag;
};
