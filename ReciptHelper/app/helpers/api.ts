//local dev

//export default "http://localhost:5084/api"

//Pub dev
export default "https://srv589522.hstgr.cloud/api"

export const CreateCookie =()=>{
    const recipthelper = "recipthelper"

    document.cookie = `helper=; path=/; max-age=0; samesite=Lax; secure`;
    window.location.reload();
  }