import { html } from '../../node_modules/lit-html/lit-html.js';
import {getFruitById,getFruitPicByName} from '../api/data.js';

const detailsTamplate = (fruit,pic) => html`
<h2>Details for ${fruit.name}</h2>
<section class="bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4 mb-sm-5">
                <div class="card card-style1 border-0">
                    <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div class="row align-items-center">
                            <div class="col-lg-6 mb-4 mb-lg-0">
                                <img src=${pic} alt="fruit">
                            </div>
                            <div class="col-lg-6 px-xl-10">
                                <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                    <h3 id="developer" >Main Information</h3>
                                    <span class="text-primary">Name: ${fruit.name}</span>
                                    <br>
                                    <span class="text-primary">Genus: ${fruit.genus}</span>
                                    <br>
                                    <span class="text-primary">Family: ${fruit.family}</span>
                                    <br>
                                    <span class="text-primary">Order: ${fruit.order}</span>
                                </div>
                                <ul class="list-unstyled mb-1-9">
                                <h3 id="developer" >Nutritions</h3>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Carbohydrates: ${fruit.nutritions['carbohydrates']}</span></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Protein: ${fruit.nutritions['protein']}</span></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Fat: ${fruit.nutritions['fat']}</span></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Calories: ${fruit.nutritions['calories']}</span></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Sugar: ${fruit.nutritions['sugar']}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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