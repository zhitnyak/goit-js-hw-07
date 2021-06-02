const totalCategoriesAndEl = () => {
  const titleCategory = document.querySelectorAll(".item");
  console.log(`В списке ${titleCategory.length} категории.`);

  titleCategory.forEach((element) => {
    console.log(`Категория: ${element.querySelector("h2").textContent}`);
    console.log(
      `Количество элементов: ${element.querySelectorAll("li").length}`
    );
  });
};
totalCategoriesAndEl();

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента(тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).
