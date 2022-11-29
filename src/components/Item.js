import { v4 as uuid } from 'uuid';

class Item {
  constructor(text) {
    this.id = uuid();
    this.text = text;
    this.done = false;
  }
}

export default Item;
