const istatus = 200;

if (istatus === 200) {
    console.log("ok");
} else if (istatus === 400) {
    console.log("Request");
} else{
    console.log("unknown Status");
}

switch (istatus) {
    case 200:
        console.log("ok");
    case 400:
        console.log("Bad Request");
        break
    default:
        console.log("Unknow status");
        break
}   


const statusmassage = 
      istatus === 500 ? "ok" : "Bad Request"
console.log(statusmassage)