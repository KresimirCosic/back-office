import { IProduct } from '../entities/Product.entity';
import { IStatsCategories } from '../entities/StatsCategories.entity';

export interface IProductsState {
  products: IProduct[];
  product: IProduct | undefined;
  stats: IStatsCategories[];
  APIRequests: string[];
}
