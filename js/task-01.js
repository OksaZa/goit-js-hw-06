const categories = document.body.children[1];
const items = categories.children;
console.log(items.length);

[...items].forEach((item) => {
  const title = item.firstElementChild.textContent;
  const itemCount = item.lastElementChild.children.length;

  console.log("Заголовок: ", title);
  console.log("Кількість елементів: ", itemCount);
});
