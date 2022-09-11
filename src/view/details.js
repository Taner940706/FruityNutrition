import { html } from '../../node_modules/lit-html/lit-html.js';
import {getFruitById,getFruitPicByName} from '../api/data.js';

const detailsTamplate = (fruit,pic) => html`
<section id="main-information">
<p id="name">${fruit.name}</p>
<p id="genus">${fruit.genus}</p>
<p id="family">${fruit.family}</p>
<p id="order">${fruit.order}</p>
</section>
<section id="details">
          <div id="details-wrapper">
            <p id="details-carbohydrates">${fruit.nutritions['carbohydrates']}</p>
            <p id="details-protein">${fruit.nutritions['protein']}</p>
            <p id="details-fat">${fruit.nutritions['fat']}</p>
            <p id="details-calories">${fruit.nutritions['calories']}</p>
            <p id="details-sugar">${fruit.nutritions['sugar']}</p>
            <div>
            <img src=${pic} alt="fruit" width="300" height="300">
            </div>
          </div>
        </section>`;

export async function detailsPage(ctx) {
    const fruitId = ctx.params.id;
    const fruit = await getFruitById(fruitId);
    const img = await getFruitPicByName(fruit.name);
    const pic = (img.results[0]);
    ctx.render(detailsTamplate(fruit,pic));



}