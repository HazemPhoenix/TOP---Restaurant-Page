import image from "./Image.jpg";

function loadPage() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.classList.add("home-header");
  const h2 = document.createElement("h2");
  h2.classList.add("home-paragraph");
  const img = new Image();
  img.src = image;
  img.classList.add("home-image");
  h1.textContent = "Ascent";
  h2.textContent = "A Fine Dining Experience that Elevates Your Senses";

  container.appendChild(h1);
  container.appendChild(h2);
  container.appendChild(img);
}
export default loadPage;
