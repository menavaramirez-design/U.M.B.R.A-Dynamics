const firebaseConfig = {
    apiKey: "AIzaSyAbRqp7-eA9XvwQ6KMvPKdzmcZZ1dMZj6o",
    authDomain:  "umbr-f6369.firebaseapp.com",
    databaseURL: "https://umbr-f6369-default-rtdb.firebaseio.com",
    projectId: "umbr-f6369",
    storageBucket: "umbr-f6369.firebasestorage.app",
    messagingSenderId: "121229147052",
    appId: "1:121229147052:web:069b2c277e9b7df4461809",
    measurementId: "G-WZLY4TNHPE"
};

// Inicializar los servicios de Firebase de forma modular
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Función que se activa al pulsar el botón "Descifrar Directorio"
function descifrarBoveda() {
    console.log("[SISTEMA]: Iniciando protocolo de descifrado...");
    
    // Configurar el proveedor de inicio de sesión de Google
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // Lanzar ventana emergente para que el usuario inicie sesión
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            alert("[SISTEMA]: Acceso Concedido. Bienvenido Agente, " + user.displayName);
            
            // Aquí redirigiremos al directorio secreto de personajes en el siguiente paso
            window.location.href = "directorio.html";
        })
        .catch((error) => {
            console.error("[ERROR]: Autenticación fallida o cancelada.", error);
            alert("[SISTEMA/ERROR]: Acceso Denegado. Cortafuegos corporativo activo.");
        });
}
