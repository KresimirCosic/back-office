import { ICategory } from './Category.model';
import { IEmployee } from './Employee.model';

export interface IProduct {
  title: string;
  category: ICategory;
  price: number;
  employee: IEmployee;
  description?: string;
}
