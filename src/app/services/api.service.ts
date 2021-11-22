export abstract class APIService {
  protected baseURL: string =
    'http://us-central1-test-b7665.cloudfunctions.net/api/stores';
  protected storeID: string = 'ijpxNJLM732vm8AeajMR';
  protected API: string = `${this.baseURL}/${this.storeID}`;
  protected fakeAPIRequestDuration: number = 2000;
}
