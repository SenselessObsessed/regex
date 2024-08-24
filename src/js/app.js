export default class Validator {
  constructor(username, number = null) {
    this.username = username;
    this.number = number;
  }

  validateUsername() {
    return /^([a-z_-]\d{0,3})+[^\d_-]$/i.test(this.username);
  }

  changeNumberToJSON() {
    if (!this.number.startsWith('+')) this.number = `+${this.number}`;
    return this.number.replace(/[() -]/g, '');
  }
};
  