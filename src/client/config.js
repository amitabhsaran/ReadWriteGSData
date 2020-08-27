let urlScript = "https://script.google.com/macros/s/AKfycbxdmdMcz0XNKBxPEtmH0Tgm7tpnqvNqg8aLV4SpwQOTyDhdhKY/exec";
let sendGSData = {
        callFunction: "addData",
        row: [{name: "Charlie", date: new Date().toString(), id: 0},
              {name: "David", date: new Date().toString(), id: 0},
             ],
        result: []
   };
let getGSData = {
        callFunction: "readData",
        row: {name: "", date: "", range:{beginRow: 31, totalRecord: 10}},
        result: []
   };