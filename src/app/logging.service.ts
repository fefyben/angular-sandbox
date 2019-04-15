export class LoggingService {
  logStatusChanged(status: string) {
    console.log(`Status changed, new status: ${ status }`);
  }
}
