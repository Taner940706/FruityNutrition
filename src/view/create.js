import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFruit } from '../api/data.js';

const createTamplate = (onSubmit) => html`<section id="create">
<div class="form" @submit=${onSubmit}>
  <h2>Create Fruit</h2>
  <hr>
  <form class="create-form">
  <input
      type="text"
      name="genus"
      placeholder="Genus"
    />
   <input
      type="text"
      name="name"
      placeholder="Name"
    />
    <input
      type="text"
      name="family"
      placeholder="Family"
    />
    <input
      type="text"
      name="order"
      placeholder="Order"
    />
    <input
      type="number"
      name="carbohydrates"
      placeholder="Carbohydrates"
    />
    <input
      type="number"
      name="protein"
      placeholder="Protein"
    />
    <input
      type="number"
      name="fat"
      placeholder="Fat"
    />
    <input
      type="number"
      name="calories"
      placeholder="Calories"
    />
    <input
      type="number"
      name="sugar"
      placeholder="Sugar"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTamplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const fruit = {
            genus: formData.get('genus').trim(),
            name: formData.get('name').trim(),
            family: formData.get('family').trim(),
            order: formData.get('order').trim(),
            nutritions:{
            carbohydrates: parseInt(formData.get('carbohydrates').trim()),
            protein: parseInt(formData.get('protein').trim()),
            fat: parseInt(formData.get('fat').trim()),
            calories: parseInt(formData.get('calories').trim()),
            sugar: parseInt(formData.get('sugar').trim())
            }
        }

        if (Object.values(fruit).some(x => !x)) {
            return alert('All fields are required!')
        };

        await createFruit(fruit);
        event.target.reset();
        ctx.page.redirect('/')
    }
}