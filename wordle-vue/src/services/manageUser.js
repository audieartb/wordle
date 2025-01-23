
const API_URL = 'http://127.0.0.1:8000/api/users/'

export async function signUp(){
    const userData = {
        user: "patrick",
        email: "patrick@email.com",
        password: "star"
    }

    localStorage.setItem('user', userData.email)
    localStorage.setItem('token', 'token')

    return
}