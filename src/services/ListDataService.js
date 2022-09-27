import firebase from "../firebase";

const db = firebase.ref("/bookList");

class ListDataService {
  getAll() {
    return db;
  }

  create(lista) {
    return db.push(lista);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ListDataService();