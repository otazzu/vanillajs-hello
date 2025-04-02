window.onload = function () {
  let frase = document.getElementById("excuse")

  let quien = ['El perro', 'La awela', 'El portero', 'Un pajaro'];
  let loHizo = ['comió', 'meó', 'estampó', 'rompió'];
  let que = ['mi codigo', 'mi cama', 'el coche'];
  let cuando = ['antes de clase', 'mientras dormia', 'mientras hacia ejercico', 'en la cena', 'mientras rezaba'];



  frase.innerHTML = `${quien[random(quien.length)]} ${loHizo[random(loHizo.length)]} ${que[random(que.length)]} ${cuando[random(cuando.length)]}`

};

const random = (n) => {
  let num = Math.floor(Math.random() * n)
  console.log(num)
  return num
}
