import { IProduct } from '../entities/Product.entity';
import { IStatsCategories } from 'src/app/models/entities/StatsCategories.entity';

export interface IProductsState {
  products: IProduct[];
  product: IProduct | undefined;
  stats: IStatsCategories | undefined;
}
