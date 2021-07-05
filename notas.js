//Creación del query para la captura de notas

    var nota = {
        descripcion: ""
    };

    function guardar(){
        console.log("Se llamó la función guardar()"); 
        nota.descripcion = document.getElementById("descripcion")
        guardarNota();
    }

    function guardarNota(){
        document.getElementById("desc").innerHTML = nota.descripcion;

    }
    
    var btnGuardar = document.querySelector(".btn-guardar");
    console.log(btnGuardar);
    btnGuardar.addEventListener("click",()=>{
    document.querySelector(".btn-info").innerHTML = "Update";
});
    


    


    
    
    

