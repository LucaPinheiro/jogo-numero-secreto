const numeros = {
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
 }
 
 const corrigeNumeros = (palavra) => {
    for (let numero in numeros) {
       if (numeros.hasOwnProperty(numero)) {
          if (palavra === numero) {
             palavra = numeros[numero];
             break; 
          }
       }
    }
    return palavra;
 }
 