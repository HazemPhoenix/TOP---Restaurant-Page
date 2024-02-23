function aboutPage() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.classList.add("about-header");
  h1.textContent = "About Us";
  const p = document.createElement("p");
  p.textContent =
    "Ascent is a fine dining experience that elevates your senses. We specialize in creating a unique and memorable dining experience that will leave a lasting impression.";
  p.classList.add("about-paragraph");
  container.appendChild(h1);
  container.appendChild(p);
}

export default aboutPage;
