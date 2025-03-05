export default async function GetReceiptByEmail(email: string) {
    const response = await fetch(`http://localhost:5084/api/recipt/get/by/email?email=${email}`, {
        method: 'GET',
        credentials: 'include',
    });
    return response;
}
