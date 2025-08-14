// versi 1
// function verifikasiLogin(username, password) {
//     try {
//         if (username === "admin" && password ==="12345") {
//             console.log("Login berhasil");
//         }
//         else if (typeof username == "string" || typeof password == "string") {
//             throw new Error("Username atau password salah");
//         }
//         else {
//             console.log("Terjadi kesalahan: username dan password harus berupa teks");
//         }
//     }
//     catch (error) {
//     console.log(error.message);
//     }
// }

// versi 2, beda letak else if
function verifikasiLogin(username, password) {
    try {
        if (username === "admin" && password ==="12345") {
            console.log("Login berhasil");
        }
        else if (typeof username != "string" || typeof password != "string") {
            throw new Error("username dan password harus berupa teks");
        }
        else {
            console.log("Username atau password salah");
        }
    }
    catch (error) {
    console.log("Terjadi kesalahan:", error.message);
    }
}

verifikasiLogin("admin", "12345");
verifikasiLogin("admin", "salah");
verifikasiLogin(123, true);