const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(e){
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null,JSON.parse(xhttp.responseText));
            }else{
                const error = new Error("Error " + url_api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, (error1, data1) => {
  if(error1) return console.error(error1);
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if(error3) return console.error(error3);     
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);  
    });
  });
});