import type { ICardCategory } from "./types";
import homik from '../public/HomeSideBar.png'

export const categories: ICardCategory[] = [
  { id: 1, name: 'Автозапчасти',icon:homik},
  { id: 2, name: 'Выхлопная система',icon:homik},
  { id: 3, name: 'Прокладки ресивера и впускного коллектора',icon:homik}
];