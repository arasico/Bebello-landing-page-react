import base from '../api/baseURL';
import Token from '../api/token';
import AppToken from '../api/appToken';
import { browserHistory } from 'react-router';


function postApi(data, key, type , customeHeader) {
    // console.log(customeHeader)

     let  url = base.baseUrl + key;
    return fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "agent": "web",
            // "X-Debug": 1,
            "Authorization": Token,
            "appToken": AppToken,
            ...customeHeader
        },
        redirect: "follow",
        referrer: "no-referrer",
        // body: JSON.stringify(data), 
        body: data
    }).then(response => {
        const statusCode = response.status
        const data = response.json()
        return Promise.all([statusCode, data])
    }).then(async ([res, data]) => {
    //     if(res === 401){ 
    //         await localStorage.removeItem('@tokenAgency');
    //         await localStorage.removeItem('@appTokenAgency'); 
    //         browserHistory.push('/login')
    //    }

        //// console.log(res, data)
        return ({'status': res, 'data': data.data, 'error': data.error, 'isLoading': false})
    })

}


export default postApi;


/* how can use it ------------------->

import PostData  from './controler/postToApi';


const res = PostData(data,'api url', type , AppName);

  // console.log(res);          // data, error,status
  // console.log(res.status);   // 200 means success
  // console.log(res.error);    // show the error from server
  // console.log(res.data);     // show the data from server


*/

 