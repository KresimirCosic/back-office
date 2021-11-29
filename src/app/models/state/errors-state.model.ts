export interface IError {
  id: string;
  message: string;
}

export interface IErrorsState {
  errors: IError[];
}
