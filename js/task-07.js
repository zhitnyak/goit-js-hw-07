//Напиши скрипт, который реагирует на изменение значения input#font-size-control
//(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.
{
  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */
}

const inputEl = document.querySelector("#font-size-control");
const textTarget = document.querySelector("#text");

const onChangeFont = () => {
  textTarget.style.fontSize = `${inputEl.value}px`;
};

// const onChangeFont = (event) => {
//   textTarget.style.fontSize = event.currentTarget.value + "px";
// };

inputEl.addEventListener("input", onChangeFont);
