export interface IProduct {
  id: string;
  data: {
    title: string;
    description?: string;
    category: string;
    employee: string;
    price: number;
  };
}
