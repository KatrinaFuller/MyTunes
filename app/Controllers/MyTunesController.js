import MyTunesService from "../Services/MyTunesService.js";

//Private
let _myTunesService = new MyTunesService()

function _drawApiSongs() {
    let elem = document.getElementById('api-songs')
    let songs = _myTunesService.ApiSongs
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
        _myTunesService.addSubscriber("apiSongs", _drawApiSongs)

        //NOTE Retrieve data
        _myTunesService.getMusicByQuery('taylor swift')
    }

    search(e) {
        e.preventDefault()
        _myTunesService.getMusicByQuery(e.target.query.value)
    }
}