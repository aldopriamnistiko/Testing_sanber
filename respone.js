
const asetKendaraan = require ("./json.js")

const response = {
    testing : 2586,
    aset : {
        rumah:"sintia",
        gender: "wanita",
        nomortelp: "0258963147",
        jenistandapengenal: "KTP",
        reksadana:"Seterah gw",
         kendaraan: ["avanza","mio","honda","truck"] 
    }
}
asetKendaraan.printKendaraan(response)