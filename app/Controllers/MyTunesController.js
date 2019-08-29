import MyTunesService from "../Services/MyTunesService.js";

//Private
let _myTunesService = new MyTunesService()

function _draw() {
    let elem = document.getElementById('songs')
    let songs = _myTunesService.Songs
    let template = '<ul'
    songs.forEach(s => {
        template += s.Template
    })
    elem.innerHTML = template + '</ul>'
}


//Public
export default class MyTunesController {
    constructor() {
        //NOTE Register all subscribers
        _myTunesService.addSubscriber("songs", _draw)

        //NOTE Retrieve data
        _myTunesService.getMusicByQuery('ccr')
    }

    search(e) {
        e.preventDefault()
        _myTunesService.getMusicByQuery(e.target.query.value)
    }
}