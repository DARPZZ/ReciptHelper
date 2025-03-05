export async function OpretBruger(formData:any) {
    const response = await fetch("http://localhost:5084/api/user/create", {
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