export default class Streak{
  constructor() {
    this.currentStreak = 0;
    this.record = 0;
  }

  checkAndUpdateRecord() {
    if(this.currentStreak > this.record) {
      this.record = this.currentStreak
    }
  }

  reset() {
    this.currentStreak = 0;
  }

  increment() {
    this.currentStreak++;
  }
}
