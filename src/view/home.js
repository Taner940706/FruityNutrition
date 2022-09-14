import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = html `
<h1>Welcome to FruitNutrition</h1>
<section class="how-section1">
<div class="row">
    <div class="col-md-6 how-img1">
        <img src="https://tse3.mm.bing.net/th?id=OIP.GDnSNDAeFT7LFTaa6vQ4YQHaHa&amp" class="rounded-circle img-fluid" alt=""/>
    </div>
    <div class="col-md-6">
        <h4>Benefits of fruits</h4>
        <p class="text-muted">Fruits come in all shapes and sizes, and different fruits have different health benefits. For the best results, add a variety of fruits to the diet.
By eating fruit, a person is providing their body with key vitamins, antioxidants, and dietary fiber. This can have significant benefits for heart health, digestion, weight management, and skin health.
People can enjoy a wide variety of fruits to improve their health and lower the risk of inflammation, heart disease, cancer, obesity, and diabetes.</p>
    </div>
</div>
<div class="row">
    <div class="col-md-6">
        <h4>Nutrition</h4>
        <p class="text-muted">Nutrition is a critical part of health and development. Better nutrition is related to improved infant, child and maternal health, stronger immune systems, safer pregnancy and childbirth, lower risk of non-communicable diseases (such as diabetes and cardiovascular disease), and longevity.
Healthy children learn better. People with adequate nutrition are more productive and can create opportunities to gradually break the cycles of poverty and hunger.
Malnutrition, in every form, presents significant threats to human health. Today the world faces a double burden of malnutrition that includes both undernutrition and overweight, especially in low- and middle-income countries. There are multiple forms of malnutrition, including undernutrition (wasting or stunting), inadequate vitamins or minerals, overweight, obesity, and resulting diet-related noncommunicable diseases.
The developmental, economic, social, and medical impacts of the global burden of malnutrition are serious and lasting for individuals and their families, for communities and for countries.</p>
    </div>
    <div class="col-md-6 how-img2">
        <img src="https://tse3.mm.bing.net/th?id=OIP.x9a37zv63QZX5Noi3KLIYQHaE8&amp" class="rounded-circle img-fluid" alt=""/>
    </div>
     </div>
</section>
`

export async function homePage(ctx) {
    ctx.render(homeTemplate)
}