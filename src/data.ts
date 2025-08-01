import type { ICardCategory, IProduct } from "./types";
import homik from '../public/HomeSideBar.png'

import Ahmed from '../public/AHMEDDELETE.jpg'


export const categories: ICardCategory[] = [
  { id: 1, name: 'Автозапчасти',icon:homik},
  { id: 2, name: 'Выхлопная система',icon:homik},
  { id: 3, name: 'Прокладки ресивера и впускного коллектора',icon:homik}
];


export const products:IProduct[] = [
  {
    id: 1,
    title: "Handmade Fresh Table",
    rating: 5,
    inStock: true,
    quantityInLot:500,
    price: 687,
    description: "Andy shoes are designed to keeping in...",
    category: {
      id: 5,
      name: "Others",
      icon: 'icon'
    },
    images: [
      "http://cdn.ct.sexhoundlinks.com/29/58339/e5d6a63eacfafb93888ab430abd2f6ea/659743.jpg",
      "http://cdn.ct.sexhoundlinks.com/29/58339/e5d6a63eacfafb93888ab430abd2f6ea/659743.jpg",
      "https://placehold.co/600x400"
    ]
  },
  {
    id: 2,
    title: "Handmade Fresh Table",
    rating: 5,
    inStock: true,
    quantityInLot:500,
    price: 687,
    description: "Andy shoes are designed to keeping in...",
    category: {
      id: 5,
      name: "Others",
      icon: 'icon'
    },
    images: [
      "https://static.life.ru/posts/2016/12/948333/25abeab9b64eb5e233de29b906e69431.jpg",
      "http://cdn.ct.sexhoundlinks.com/29/58339/e5d6a63eacfafb93888ab430abd2f6ea/659743.jpg",
      "https://placehold.co/600x400"
    ]
  },
  {
    id: 3,
    title: "qqqqq",
    rating: 5,
    inStock: true,
    quantityInLot:500,
    price: 111687,
    description: "Andy shoes are designed to keeping in...",
    category: {
      id: 5,
      name: "Others",
      icon: 'icon'
    },
    images: [
      "https://static5.tgstat.ru/channels/_0/ed/edbe9373175a3906735152ed6c0eb2b1.jpg",
      "http://cdn.ct.sexhoundlinks.com/29/58339/e5d6a63eacfafb93888ab430abd2f6ea/659743.jpg",
      "https://placehold.co/600x400"
    ]
  },
  {
    id: 4,
    title: "Ахмед",
    rating: 5,
    inStock: true,
    quantityInLot:1,
    price: 1,
    description: "Andy shoes are designed to keeping in...",
    category: {
      id: 5,
      name: "Others",
      icon: 'icon'
    },
    images: [
      Ahmed,
      "http://cdn.ct.sexhoundlinks.com/29/58339/e5d6a63eacfafb93888ab430abd2f6ea/659743.jpg",
      "https://placehold.co/600x400"
    ]
  }

]