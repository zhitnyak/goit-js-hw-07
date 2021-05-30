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
