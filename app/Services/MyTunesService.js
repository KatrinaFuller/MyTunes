import Song from "../Models/Song.js";

// let _sandBoxApi = axios.create({
//     baseURL: 'http://bcw-sandbox.herokuapp.com/api/Katrina/songs'
// })

//Private
let _state = {
    apiSongs: [],
    mySongs: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    apiSongs: [],
    mySongs: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class MyTunesService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get ApiSongs() {
        return _state.apiSongs
    }

    get MySongs() {
        return _state.mySongs
    }

    getMySongs() {
        _sandBoxApi.get()
            .then(res => {
                console.log(res.data)
                _setState('mySongs', res.data.data)
            })
    }

    getMusicByQuery(query) {
        let url = 'https://itunes.apple.com/search?callback=?&term=' + query;
        // @ts-ignore
        $.getJSON(url)
            .then(res => {
                let results = res.results.map(rawData => new Song(rawData))
                _setState('apiSongs', results)
            })
            .catch(err => console.log(err))
    }
}
