import api from "../api";

export default async function GetReceiptByEmail() {
    const response = await fetch(`${api}/recipt/get/by/email`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
          },
    });
    return response;
}

export async function CreateRecipt(formData:any) {
    const response = await fetch(`${api}/recipt/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            købsDato: formData.købsDato,
            slutDato: formData.slutDato,
            email: formData.email,
            emailLink : formData.emailLink,
            produktNavn: formData.produktNavn,
            firmaNavnToCheck: formData.firmaNavnToCheck,
            pris : formData.pris
        }),
      });
      return response
  }
  export async function SetSettings(formData:any) {
    const response = await fetch(`${api}/recipt/set/sletKvitteringer?value=${formData.value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      return response
  }
  export async function SletKvit() {
    const response = await fetch(`${api}/recipt/slet/kvitteringer`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      return response
  }
  export async function sletkvitEach(id:any) {
    const response = await fetch(`${api}/recipt/slet/kvitteringer/on/id?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      return response
  }