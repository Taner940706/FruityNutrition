import { html } from '../../node_modules/lit-html/lit-html.js';
import {searchFruitByName, getAllFruits, searchFruitByFamily, searchFruitByGenus, searchFruitByOrder } from '../api/data.js';


const searchTamplate = (fruit, onSearch,params = '') => html`<section>

<form @submit=${onSearch}>
<div class="wrap">
<div class="search">
    <input type="text" name="search" class="searchTerm" value=${params}>
    <select name="opt" id="opt1">
    <option value="name">Name</option>
    <option value="family">Family</option>
    <option value="genus">Genus</option>
    <option value="order">Order</option>
  </select>
    <input type="submit" value="Search" class="searchButton">
    </div>
    </div>
<br>
</form>

${fruit.length == 0 ? html`<h2>No result.</h2>` : fruit.map(c => html`
<div class="fruit">
  <p>
    <strong>Name: </strong
    ><span class="name">${c.name}</span>
  </p>
  <p>
    <strong>Genus: </strong
    ><span class="genus">${c.genus}</span>
  </p>
  <p>
    <strong>Family: </strong
    ><span class="family">${c.family}</span>
  </p>
  <p>
    <strong>Order: </strong
    ><span class="order">${c.order}</span>
  </p>

  <a class="details-btn" href="/details/${c.id}">Details</a>
</div>`)}
</section>`;



export async function searchPage(ctx){
  let params = ctx.querystring.split('=')[1];
  let fruit = [];
  let choice = document.getElementById("opt1");

  if(params){
    if (choice.value == "name"){
      fruit = [await searchFruitByName(decodeURIComponent(params))];
    }
    else if (choice.value == "family"){
      fruit = await searchFruitByFamily(decodeURIComponent(params));
    }
    else if (choice.value == "genus"){
      fruit = await searchFruitByGenus(decodeURIComponent(params));
    }
    else if (choice.value == "order"){
      fruit = await searchFruitByOrder(decodeURIComponent(params));
    }
    
  } else{
    fruit = await getAllFruits();
  }
  ctx.render(searchTamplate(fruit, onSearch, params));

  function onSearch(event){
      event.preventDefault();
      let formData = new FormData(event.target);
      let search = formData.get('search');

      if(search){
          ctx.page.redirect('/search?query=' + encodeURIComponent(search));
      }
      else{
        ctx.page.redirect('/search');
      }
  }
}

