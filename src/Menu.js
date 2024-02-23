function menuPage() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  const p = document.createElement("p");
  p.textContent =
    "Our menu is inspired by the seasons and the finest locally sourced ingredients. We offer a variety of dishes that will satisfy any palate.";

  const menu = document.createElement("ul");
  const items = ["Appetizers", "Entrees", "Desserts"];
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    menu.appendChild(li);
  });

  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(menu);
}

export default menuPage;
