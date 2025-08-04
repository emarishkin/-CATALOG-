export interface ICardCategory {
    id: number;
    name: string; 
    icon:string
    backImage?:string
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
  quantity?: number;
}
