//local dev

//export default "http://localhost:5084/api"

//Pub dev
export default "https://srv589522.hstgr.cloud/api"

export function decode()
{
    let decodedString = ""
    var token = sessionStorage.getItem("to")
    if(token)
    {
        decodedString = atob(token);
        console.warn(decodedString)
    }
    return decodedString;
}