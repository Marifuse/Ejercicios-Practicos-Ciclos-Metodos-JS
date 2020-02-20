function preguntasOpciones(){
  var option = prompt("Holis ヽ(^o^)ノ Indica una opción del 1 al 5");
  switch (option) {
    case "1":
      var a = prompt("Ingrese un número entre 1 y 100 ʕ•́ᴥ•̀ʔっ♡:");
      option1(a)
      break;
    case "2":
      var b = prompt("¿De qué color es el caballo de Napoleón?... Piensa piensa (ง︡'-'︠)ง");
      option2(b)
      break;
    case "3":
      var c = alert('Saca tu promedio de Notas de forma SENCILLA... ¿Quieres intentar ≧◉ᴥ◉≦?');
      option3(c)
      break;
    case "4":
      var d = alert('Ingresa el nombre de 3 Frutas que te gusten ;D');
      option4(d)
      break;
    case "5":
      var f = prompt("Ingresa tu nombre ^-^");
      option5(f)
      break;
      // Este es el caso 6 (Son sólo 5 preguntas)
    default: alert("Indique una opción válida plis XD... No sea un loquillo (─‿‿─)");
  }
}


// Ejecutar cuando apriete una opción numérica
preguntasOpciones();
// Función de agregar número del 1 al 100
function option1(numeroIngresado) {
  if(numeroIngresado > 0 && numeroIngresado < 101) {
    for(i = 0; i < numeroIngresado ;i++)
      console.log("{n}|",i);
  }
  else {
    alert("Este número no es válido");
  }
}

// Función del color del caballo de Napoleón
function option2(colorIngresado) {
  var horse = 'blanco';
  do {
    if(colorIngresado != horse) {
      colorIngresado = prompt("¿De qué color es el caballo de Napoleón?... Piensa piensa D:")
    }
  } while (colorIngresado != 'blanco');
      console.log("Sí, es blanco XD");
}

// Función para sacar promedio de notas
function option3(promedioNotas) {
  var math = parseFloat(prompt("Ingresa tu promedio de Matemáticas:"));
  var physical = parseFloat(prompt("Ingresa tu promedio de Física:"));
  var science = parseFloat(prompt("Ingresa tu promedio de Ciencias:"));

  var average = (math + physical + science)/3;

  promedioNotas = alert('Tu promedio de notas es:' + ' ' + Math.round(average));
}

// Función para escribir el nombre de tres frutas y no se muestre manzana en CONSOLA
function option4(nombreFrutas) {
  var fruitOne = prompt("Ingresa tu primera fruta");
  var fruitTwo = prompt("Ingresa tu segunda fruta");
  var fruitThree = prompt("Ingresa tu tercera fruta");
  var totalFruits = [];

  totalFruits.push(fruitOne, fruitTwo, fruitThree);
    for (let fruit of totalFruits) {
        if (fruit == 'manzana') {
            continue;
        }
        console.log(fruit);
    }
}

// Función para contar las vocales y consonantes del nombre (Expresiones regulares)
function option5(contadorNombre) {
  contadorNombre = contadorNombre.replace(/ /g, ""); //Reprase tiene como función eliminar los espacios que quedan entre textos (g buscador global)
  var arrName = contadorNombre.split(''); //Transforma lo escrito en un arreglo

  var totalVocals = /[aeiouAEIOUáéíóú]/;
  var vocals = 0;
  var consonants = 0;

    for (var i = 0; i < arrName.length; i++) {
      if (totalVocals.test(arrName[i])) {
          vocals++;
      } else {
        consonants++;
      }
    }
    alert('La cantidad de vocales que tiene tu nombre es de: '
    + vocals + ' \n ' + 'La cantidad de consonantes que tiene tu nombre es de: ' + consonants);
} // n cumple la función de <br> como salto de línea
