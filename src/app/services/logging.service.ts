export class LoggingService {
  str: string = 'Hello';

  constructor() {
    console.log('LoggingService instance created...');
  }

  public greeting(cmp: string) {
    console.log(this.str + ' ' + cmp);
  }
}
