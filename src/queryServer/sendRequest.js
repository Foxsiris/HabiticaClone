export default function sendRequest(method,url,body){
    const headers = {
        'Content-type':'application/json'
    }
    return fetch(url,{
        method:method,
        body:JSON.stringify(body),
        headers:headers
    }).then(response=>{
        console.log(body)
        return response.json()
    })
}