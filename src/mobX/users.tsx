import { makeAutoObservable } from "mobx";

class Users {
    userName = "";
    constructor() {
        makeAutoObservable(this);
    }
}

export default new Users();
