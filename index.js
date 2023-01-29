class Telephone_package {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  RemovePhoneNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((num) => num !== phoneNumber);
  }

  DialPhoneNumber(phoneNumber) {
    if (!this.phoneNumbers.includes(phoneNumber)) {
      return;
    }

    this.notifyObservers(phoneNumber);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.onDial(phoneNumber));
  }
}

class Observer1 {
  constructor() {}
  onDial(phoneNumber) {
    alert("Now Dialling " + phoneNumber);
  }
}
class Observer2 {
  constructor() {}
  onDial(phoneNumber) {
    alert("Dialling " + phoneNumber);
  }
}

const telephone = new Telephone_package();
const observer = new Observer1();
const observer2 = new Observer2();
telephone.addObserver(observer);
telephone.addObserver(observer2);
telephone.AddPhoneNumber("+2348575288943");
telephone.DialPhoneNumber("+2348575288943");
