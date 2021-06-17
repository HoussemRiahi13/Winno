// Note : I'm doing a different file here, but I think the API should be regrouped in one single file 
// on the front-end, I'm not used to Axios, I'll check that later

import axios from 'axios';

let accessToken = localStorage.getItem("jwt-token")    // This will store token on your session
const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${accessToken}`}
    }
})