export default function menu(item) {
  return `<article class="menu-wrapper">
  <div class="menu-img-wrapper">
    <img class="menu-img" src=${item.image_url} alt=${item.title}>
  </div>
    <div class="menu-text">
      <div class="menu-head">
        <h3 class="menu-heading">${item.title}</h3>
        <p class="price">${item.price}</p>
      </div>
      <p class="menu-desc">${item.description}</p>
    </div>
    </article>`;
}
