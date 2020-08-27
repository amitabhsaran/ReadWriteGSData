//let url = "https://script.google.com/macros/s/AKfycbxdmdMcz0XNKBxPEtmH0Tgm7tpnqvNqg8aLV4SpwQOTyDhdhKY/exec";
//let CONFIG = require("./config.json");

function readGS(){    
    //https://javascript.info/fetch - to understand fetch, promise, json better
    let promise = fetch(urlScript)
                    .then(response => {
                      if (!response.ok){
                        throw new Error("Network response was not ok");
                      }
                      return response.json();
                    })
                    .then(data => {
                      console.log(data);
                      document.getElementById("app").textContent = data[32][0];
                    })
                    .catch(error => {
                      console.error(error);
                    });
}

function add_get_GS_data(){    
    // Example POST method implementation:
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(urlScript, {
        method: "POST", 
        body: JSON.stringify(getGSData) 
    })
    .then(response => {
      if (!response.ok){
        throw new Error("Network response was not ok");
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById("app").textContent = data.name;
    })
    .catch(error => {
      console.error(error);
    });
}

// Example POST method implementation:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
/*
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
*/
document.getElementById("btnRead").addEventListener("click", readGS);
document.getElementById("btnWrite").addEventListener("click", add_get_GS_data);