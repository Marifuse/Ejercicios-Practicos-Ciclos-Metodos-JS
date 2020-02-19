function preguntasOpciones(){
  var option = prompt("Holis ヽ(^o^)ノ Indica una opción del 1 al 6");
  switch (option) {
    case "1":
      var a = prompt("Ingrese un número entre 1 y 100:")
      option1(a)
      break;
    case "2":
      var b = prompt("¿De qué color es el caballo de Napoleón?... Piensa piensa D:")
      option2(b)
      break;
    case "3":
      var c = prompt("Ingrese un número: ")
      option3(c)
      break;
    case "4":
      var n = prompt("Ingrese un número: ")
      option4(4)
      break;
    case "5":
      var n = prompt("Ingrese un número: ")
      option5(5)
      break;
    case "6":
      alert("Bien, lo haz logrado perkin XD");
      break;
    default: alert("Indique una opción válida plis")
  }
}

// Ejecutar al iniciar
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
  var caballo = 'blanco';
  do {
    if(colorIngresado != caballo) {
      colorIngresado = prompt("¿De qué color es el caballo de Napoleón?... Piensa piensa D:")
    }
  } while (colorIngresado != 'blanco');
      console.log("Sí, es blanco XD");
}
