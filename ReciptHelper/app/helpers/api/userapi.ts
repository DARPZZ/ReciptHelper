import api from "../api";
const usapi = "user"
export async function OpretBruger(formData:any) {
    const response = await fetch(`${api}/${usapi}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: formData.Email,
          adgangskode: formData.adgangskode,
          TelefonNummer: formData.TelefonNummer
        }),
      });
      return response
}
export async function LogUserIn(formData:any) {
  const response = await fetch(`${api}/${usapi}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        Email: formData.Email,
        adgangskode: formData.adgangskode,
      }),
    });
    
    return response
}