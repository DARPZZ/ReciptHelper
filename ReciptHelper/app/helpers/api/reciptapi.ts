import api from "../api";
import { decode } from "../api";
export default async function GetReceiptByEmail(email: string) {
    const response = await fetch(`$api/recipt/get/by/email?email=${email}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
          },
    });
    return response;
}

export async function CreateRecipt(formData:any) {
    const response = await fetch(`$api/recipt/create`, {
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
