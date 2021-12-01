// decorator for services is optional and used when
// one service is injected with another service
// decorator for service is @Injectable()
// myservice = new IncrementService(); // objects
// service class is a collection of functions containing business logic
export class IncrementService {
  baseURL = 'http://www.google.com';

  constructor() {
    console.log('IncrementService instance created...');
  }

  public incrementValue(count: number): number {
    return (count += 1);
  }

  public getURL(): string {
    return this.baseURL;
  }
}
