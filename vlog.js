document.addEventListener("DOMContentLoaded", function() {
    const formularioComentario = document.getElementById("formulario-comentario");
    const listaComentarios = document.getElementById("lista-comentarios");

    formularioComentario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = this.nombre.value;
        const comentario = this.comentario.value;

        if (nombre.trim() === "" || comentario.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        agregarComentario(nombre, comentario);
        this.reset();
    });

    function agregarComentario(nombre, comentario) {
        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");

        const nombreElement = document.createElement("h3");
        nombreElement.textContent = nombre;

        const comentarioElement = document.createElement("p");
        comentarioElement.textContent = comentario;

        nuevoComentario.appendChild(nombreElement);
        nuevoComentario.appendChild(comentarioElement);

        listaComentarios.appendChild(nuevoComentario);
    }
});