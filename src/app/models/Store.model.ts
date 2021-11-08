import { ICategory } from './Category.model';
import { IEmployee } from './Employee.model';

export interface IStore {
  id: string;
  data: IStoreData;
}

interface IStoreData {
  name: string;
  category: ICategory;
  employees: IEmployee[];
}
