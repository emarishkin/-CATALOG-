export interface ICardCategory {
    id: number;
    name: string; 
    icon:string
}

export interface IProduct {
  id: number;
  title: string;
  rating: number;
  inStock: boolean;
  quantityInLot:number;
  price: number;
  description: string;
  category: ICardCategory;
  images: string[];
}

export interface ICartItem extends IProduct {
  quantity: number; 
}