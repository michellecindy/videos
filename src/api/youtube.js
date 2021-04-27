import axios from 'axios';

const KEY = 'AIzaSyDILin9-UsWZ8T63t-n3Dmir7WagIkZSho';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})