function Usuario(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Usuario.prototype.mostrarInfo = function() {
    return "Nombre: " + this.nombre + "<br>Apellido: " + this.apellido + "<br>Edad: " + this.edad;
};

var usuario; 

document.getElementById("guardarBtn").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;

    usuario = new Usuario(nombre, apellido, edad);

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";

    alert("Datos guardados con éxito!");
});

document.getElementById("mostrarBtn").addEventListener("click", function() {
    if (usuario) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = usuario.mostrarInfo();
    } else {
        alert("Primero debes guardar los datos.");
    }
});
