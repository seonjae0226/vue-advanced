import axios from "axios";

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemid){
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}
