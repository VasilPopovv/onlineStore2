import { makeAutoObservable } from "mobx";

class System {
  isDarkTheme =
    localStorage.getItem("DarkTheme") ??
    matchMedia("(prefers-color-scheme: dark)").matches;

  constructor() {
    makeAutoObservable(this);
  }

  changeThem() {
    if (this.isDarkTheme) {
      localStorage.setItem('DarkTheme', '')
      this.isDarkTheme = ''
      document.body.className = 'light'
    } else {
      localStorage.setItem('DarkTheme', 'true')
      this.isDarkTheme = 'true'
      document.body.className = 'dark'
    }
  }
}

export default new System();
