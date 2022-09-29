fetch('../categories.json')
  .then((response) => response.json())
  .then((data) => tal(data));

const element = document.querySelector('body');
const menuTitle = document.querySelectorAll('.menu__title');
const subTitle = document.querySelectorAll('.menu__subtitle');

console.log(menuTitle, subTitle);

function tal(data) {
  for (let categories of data.categories) {
    const myUl = document.createElement('div');
    myUl.innerHTML = `
    <ul class="base">
    <li>
      <span class="menu__title">${categories.name}</span>
      <ul class="menu__subtitle">
      ${categories.subcategories
        .map((subcategorie) => {
          return `
          <li>${subcategorie.name}</li>
        `;
        })
        .join('')}
      </ul>
    </li>
  </ul>   
  `;
    element.append(myUl);
  }
}
