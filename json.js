const response = {
    testing : 1234,
    aset : {
        rumah:"andara",
        gender: "laki-laki",
        nomortelp: "0258963147",
        jenistandapengenal: "Paspor",
        reksadana:"terserah gue",
         kendaraan: ["avanza","mio"] 
    }
}

function printKendaraan(data){
    for(let i=0; i<data.aset.kendaraan.length;i++ ){
        let asetKendaraan = data.aset.kendaraan[i]
        console.log("kendaraan ke" + i + "adalah : " + asetKendaraan)
    }
}
//printKendaraan(response)
module.exports = new printKendaraan(data);

console.log(response.aset.reksadana)
console.log(response.aset.gender)
console.log(response.aset.nomortelp)
