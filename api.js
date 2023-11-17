
function obtenerDatos() {
    // URL de la API
    const apiUrl = 'https://reqres.in/api/users/2';

    // Realizar la solicitud Fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then((respuesta) => {
            // Obtener la lista de usuarios
            const userList = respuesta.data;

            // Llenar el formulario con los datos obtenidos
            document.getElementById('id').value = userList.id;
            document.getElementById('email').value = userList.email;
            document.getElementById('first_name').value = userList.first_name;
            document.getElementById('last_name').value = userList.last_name;

            // Mostrar la imagen del avatar
            const avatarImg = document.getElementById('avatar');
            avatarImg.src = userList.avatar;
            avatarImg.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}
