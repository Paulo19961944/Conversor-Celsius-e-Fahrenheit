// Seleciona as IDs
let inputCelsius = document.getElementById('input1');
let inputFahrenheit = document.getElementById('input2');
let converter = document.getElementById('btn-converter');
let reset = document.getElementById('btn-reset');
let resultadoCelsius = document.querySelector('.Celsius');
let resultadoFahrenheit = document.querySelector('.Fahrenheit');


function substituirSeparadorDecimal(valor) {
  return valor.replace(/,/g, '.');
}

function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function converterFahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function adicionarResultado(celsius, fahrenheit) {
  resultadoCelsius.innerHTML = `O Valor em Celsius é: ${celsius.toFixed(2)} Cº`;
  resultadoFahrenheit.innerHTML = `O Valor em Fahrenheit é: ${fahrenheit.toFixed(2) } Fº`;
}

function limparValores() {
  inputCelsius.value = '';
  inputFahrenheit.value = '';
  resultadoCelsius.innerHTML = 'O Valor em Celsius é:';
  resultadoFahrenheit.innerHTML = 'O Valor em Fahrenheit é:';
}

function converterEExibirResultado() {
  let celsius = parseFloat(substituirSeparadorDecimal(inputCelsius.value));
  let fahrenheit = parseFloat(substituirSeparadorDecimal(inputFahrenheit.value));

  if ((isNaN(celsius) && isNaN(fahrenheit)) || (!isNaN(celsius) && !isNaN(fahrenheit))) {
    alert('Preencha apenas um dos campos ou resete os valores.');
    return;
  }

  if (!isNaN(celsius)) {
    fahrenheit = converterCelsiusParaFahrenheit(celsius);
    inputFahrenheit.value = fahrenheit.toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    celsius = converterFahrenheitParaCelsius(fahrenheit);
    inputCelsius.value = celsius.toFixed(2);
  }

  adicionarResultado(celsius, fahrenheit);
}

converter.addEventListener('click', converterEExibirResultado);
reset.addEventListener('click', limparValores);
inputCelsius.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    converterEExibirResultado();
  }
});
inputFahrenheit.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    converterEExibirResultado();
  }
});
