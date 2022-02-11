let getStorage = localStorage.getItem("token")
let token = getStorage !== null ? JSON.parse(localStorage.getItem("token")) : {}

// ambil data dari local storage di buat disini
// supaya  initial State dari token langsung terisi kalau misalkan reload semua halaman
let authStates = {
    isLoggedIn: false,
    loading: false,
    userdata: {},
    token,
    error: null
}
export default authStates