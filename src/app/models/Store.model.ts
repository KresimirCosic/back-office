export interface IStore {
  id: string;
  data: IStoreData;
}

interface IStoreData {
  name: string;
  category: string;
  employees: string[];
}
