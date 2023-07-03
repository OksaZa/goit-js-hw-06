const categories = document.body.children[1];
const items = categories.children;
console.log(items.length);

[...items].forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemList = item.querySelectorAll("li");
  const itemCount = itemList.length;

  console.log("Заголовок: ", title);
  console.log("Кількість елементів: ", itemCount);
});
