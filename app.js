// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array donde se almacenan los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del input
    const amigo = document.getElementById("amigo").value.trim();

    // Verificar si el input está vacío
    if (amigo === "") {
        alert("Es obligatorio colocar un nombre de un amigo.");
        return;
    }

    // Verificar si el amigo ya existe en la lista
    if (listaAmigos.includes(amigo)) {
        alert("Este amigo ya existe.");
        document.getElementById("amigo").value = ""; // Limpiar el input
        return;
    }

    // Agregar el nombre al array
    listaAmigos.push(amigo);

    // Limpiar el input después de agregarlo
    document.getElementById("amigo").value = "";

    // Mostrar la lista actualizada de amigos
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista antes de mostrarla

    // Recorrer el array y agregar los amigos a la lista
    listaAmigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Obtener un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").textContent = "Tu amigo secreto es: " + amigoSorteado;

    // Limpiar el array y la lista de amigos después de sortear
    listaAmigos = [];
    mostrarListaAmigos();
}
