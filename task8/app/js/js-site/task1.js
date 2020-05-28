//Task 1


function decoding(str) {
  let code = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    'sos': '···−−−···',
  }

  let result = "";
  let inputDate = str.split("   ");


  inputDate.forEach(element => {

    let temp = element.split(' ');
    temp.map(el => {
      for (key in code) {
        if (code[key] == el) {
          result = result + key;
        }
      }
    });
    result = result + " ";
  })
console.log(result);
  return result.toUpperCase();
}

function correctString (str) {
 str[0] == " " ? str = str.replace(/\s+/,'') : null;
 let maxIndex = str.length - 1;
 str[maxIndex] == " " ? str = str.replace(/\s+$/,'') : null;
 
 return str;
}

document.querySelector('.input-text').oninput = () => {

  let str = document.querySelector('.input-text').value;
  let result = correctString(decoding(str));

  document.querySelector('.task__ans').innerText = `Перевод: ${result}`;
}