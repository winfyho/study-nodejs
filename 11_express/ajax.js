export function ajax({url,method,data,timeout}){
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(method, url, true);
        xmlhttp.timeout = timeout || 5000;
        
        if(method === "GET"){
            xmlhttp.send(null);
        }else if(method === "POST"){
            
            let queryList = [];
            for(let key in data){
                queryList.push(`${key}=${encodeURIComponent(data[key])}`);
            }
            let querys = queryList.join('&')

            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(querys);
        }
        
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.readyState,xmlhttp.status);
                
                resolve(JSON.parse(xmlhttp.responseText) || {})
            }
        }
    })
}