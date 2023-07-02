const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");
console.log("Кількість категорій:", items.length);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemList = item.querySelectorAll("li");
  const itemCount = itemList.length;

  console.log("Заголовок: ", title);
  console.log("Кількість елементів: ", itemCount);
});