import axios from 'axios';

axios.get('https://api.spotify.com/v1', {})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })