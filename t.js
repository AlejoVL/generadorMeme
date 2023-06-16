
   const light = document.getElementById('boton-guardar');

    light.addEventListener("click", function() {
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        /*Guardando los datos en el LocalStorage*/
         let color = light.style.color= 'red'
         localStorage.setItem("Color", color);
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
        /*Limpiando los campos o inputs*/
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
  });

  const li = document.getElementById('boton-cargar');

    li.addEventListener("click", function() {
            /*Obtener datos almacenados*/
            var nombre = localStorage.getItem("Nombre");
            var apellido = localStorage.getItem("Apellido");
            let color = localStorage.getItem('Color');
            /*Mostrar datos almacenados*/
            document.getElementById("nombre").innerHTML = nombre;
            document.getElementById("apellido").innerHTML = apellido;
            document.getElementById("apellido").innerHTML= color

        }); 


 const matriz = [[1,2,3],[4,5,6],[7,8,9]];
 for ( x = 2; x < matriz.length ; x++) {
  console.log(matriz)
}


const matriz3 = [[],[],[]];

for ( x = 1; x < matriz.length ; x++) {
   matriz3[0].push(Math.random(1*3))
   matriz3[1].push('hola')
   matriz3[2].push('hola')
   
}

document.write(matriz3)