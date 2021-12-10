export interface IProductData {
  title: string;
  description?: string;
  category: string;
  employee: string;
  price: number;
}

export interface IProduct {
  id: string;
  data: IProductData;
}
