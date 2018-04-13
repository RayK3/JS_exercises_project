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

  storeRecord() {
    localStorage.setItem('oneLinerRecord', this.record);
  }

  retrieveRecord() {
    var retrievedRecord = parseInt(localStorage.getItem('oneLinerRecord'));
    if(!retrievedRecord) {
      return;
    } else {
      this.record = retrievedRecord;
    }
  }

  resetRecord() {
    localStorage.removeItem('oneLinerRecord');
    this.record = 0;
  }
}
