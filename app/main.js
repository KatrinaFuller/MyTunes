import MyTunesController from "./Controllers/MyTunesController.js";


class App {
    constructor() {
        this.controllers = {
            myTunesController: new MyTunesController()
        }
    }
}

window['app'] = new App()