export class CounterService {
  inactiveCounter = 0;
  activeCounter = 0;

  incrementActive() {
    this.activeCounter++;
    console.log(`Active counter: ${ this.activeCounter }`);
  }

  incrementInactive() {
    this.inactiveCounter++;
    console.log(`Inactive counter: ${ this.inactiveCounter }`);
  }
}
