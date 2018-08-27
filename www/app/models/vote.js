export default class Vote {
  constructor(data) {
    this._id = data._id;
    this.user = data.user;
    this.post = data.post;
    this.direction = data.direction;
  }
}
