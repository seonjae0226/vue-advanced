import axios from "axios";

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList(){
    try {
        return axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
        console.log(error);
    }
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName){
    try {
        return axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }  
}

function fetchUserInfo(username){
    try {
        return axios.get(`${config.baseUrl}user/${username}.json`);
    } catch (error) {
        console.log(error);
    } 
}

function fetchItemInfo(itemid){
    try {
        return axios.get(`${config.baseUrl}item/${itemid}.json`);
    } catch (error) {
        console.log(error);
    }
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}
