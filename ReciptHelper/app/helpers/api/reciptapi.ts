export default async function GetReceiptByEmail(email: string) {
    const response = await fetch(`http://localhost:5084/api/recipt/get/by/email?email=${email}`, {
        method: 'GET',
        credentials: 'include',
    });
    return response;
}

export async function CreateRecipt(formData:any) {
    const response = await fetch("http://localhost:5084/api/recipt/create", {
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
