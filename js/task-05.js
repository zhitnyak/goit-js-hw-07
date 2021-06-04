// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  name: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

const onFormSubmit = () => {
  const inputValue = refs.name.value;
  refs.title.textContent =
    inputValue === "" || inputValue[0] === " " ? "незнакомец" : inputValue;
};
refs.name.addEventListener("input", onFormSubmit);

// const onFormSubmit = (even) => {
//   refs.title.textContent =
//     refs.name.value.trim() === "" ? "незнакомец" : even.currentTarget.value;
// };
// refs.name.addEventListener("input", onFormSubmit);
