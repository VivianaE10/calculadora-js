function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value); //el parseInt me ayuda a sumar porque si no el me concatena
  if (isNaN(resultado)) resultado = "La operacion no incluye numeros";
  document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;
  console.log(`resultado: ${resultado}`);
}

//parseInt convierte un string a un numero
