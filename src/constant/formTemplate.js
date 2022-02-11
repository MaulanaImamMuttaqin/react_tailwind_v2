export const formTemplate = [
    {
        name: "nama",
        type: "text",
        placeholder: "Masukkan Nama",
        title: "Nama"
    },
    {
        name: "npm",
        type: "text",
        placeholder: "Masukkan No Induk Mahasiswa",
        title: "NPM"
    },
    {
        name: "jurusan",
        type: "text",
        placeholder: "Masukkan Jurusan",
        title: "Jurusan"
    },
    {
        name: "instansi",
        type: "text",
        placeholder: "Masukkan Asal Intansi",
        title: "Instansi"
    },
    {
        name: "mulai",
        type: "date",
        placeholder: "Masukkan Tanggal Mulai Kerja Praktek",
        title: "Tanggal Mulai"
    },
    {
        name: "akhir",
        type: "date",
        placeholder: "Masukkan Tanggal Berakhir Kerja Praktek",
        title: "Tanggal Berakhir"
    },

]

export const AccountDetailFormTemplate = [
    {
        name: "username",
        type: "text",
        placeholder: "Masukkan Username",
        title: "Username",
    },
    {
        name: "password",
        type: "password",
        placeholder: "Masukkan Password",
        title: "Password",
    },
    {
        name: "password2",
        type: "password",
        placeholder: "Konfirimasi Password",
        title: "Konfirmasi Password"
    }

]

export const SertifikatDetailformTemplate = [
    ...formTemplate,
    {
        name: "ttl",
        type: "text",
        placeholder: "Masukkan Tempat, Tanggal Lahir , ex: Aceh, 23 November 2000",
        title: "Tempat, Tanggal Lahir"
    },
    {
        name: "alamat",
        type: "text",
        placeholder: "Masukkan Alamat",
        title: "Alamat"
    },
    {
        name: "tempat",
        type: "text",
        placeholder: "Masukkan Tempat Tertanda",
        title: "Tempat Tertanda",
    }, {
        name: "manager",
        type: "text",
        placeholder: "Masukkan Nama Manager",
        title: "Manager",
    },




]