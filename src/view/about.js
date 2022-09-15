import { html } from '../../node_modules/lit-html/lit-html.js';

const AboutTemplate = html `
<div class="about-section">
  <h1>About FruityNutrition</h1>
  <p>FruityNutrition a is project for educational purpose.</p>
  <p>You can search your favourite fruit,learn basic information and see nutrition about him.</p>
  <p>He is a SPA (Single Page for Application) created with technologies like JavaScript(Node.js), HTML (lit-html), CSS, page.js and REST API.</p>
  <p>The project include two REST APis: https://www.fruityvice.com/ (fruit data) and https://imsea.herokuapp.com/ (generate list of picture from Web)</p>
  <p>Note: In the project have option to create new fruits but it's not working because of API. </p>
</div>

<h2 style="text-align:center">About Me</h2>
<hr>
<section class="bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4 mb-sm-5">
                <div class="card card-style1 border-0">
                    <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div class="row align-items-center">
                            <div class="col-lg-6 mb-4 mb-lg-0">
                                <img src="../images/me.png" alt="...">
                            </div>
                            <div class="col-lg-6 px-xl-10">
                                <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                    <h3 id="developer" >Taner Ismail</h3>
                                    <span class="text-primary">Developer</span>
                                </div>
                                <ul class="list-unstyled mb-1-9">
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Email: taner_mutalip@hotmail.com</span></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">GitHub: https://github.com/Taner940706</span></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Facebook: https://www.facebook.com/taner.mutalib/</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
`
export async function AboutPage(ctx) {
    ctx.render(AboutTemplate)
}