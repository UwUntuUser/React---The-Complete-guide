export function getAuthToken() {
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expiration');
    return token;
}

export function tokenLoader() {
    const token = getAuthToken();
    return token;
}