function calcMod(valor){
    return Math.floor((valor - 10)/2);
}

function atualizarFicha(){

    let agi = parseInt(document.getElementById("agi").value) || 0;
    let modAgi = calcMod(agi);

    document.getElementById("mod-agi").innerText =
        (modAgi >= 0 ? "+" : "") + modAgi;

    document.getElementById("ca").innerText = 10 + modAgi;
}

/* ATUALIZA AUTOMÁTICO */
document.querySelectorAll("input").forEach(i=>{
    i.addEventListener("input", atualizarFicha);
});

/* UPLOAD IMAGEM */
document.getElementById("upload-img").addEventListener("change", function(e){

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(){
        document.getElementById("preview").src = reader.result;
    }

    if(file){
        reader.readAsDataURL(file);
    }
});
