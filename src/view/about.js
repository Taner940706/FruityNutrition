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
<div class="row">
  <div class="column">
    <div class="card">
      <img src="../images/me.png" alt="Me" style="width:100%">
      <div class="container">
        <h2>Taner Ismail</h2>
        <p class="title">Developer</p>
        <p>Email: taner_mutalip@hotmail.com</p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/taner-ismail-b98298195/" target="_blank">https://www.linkedin.com/in/taner-ismail-b98298195/</a></p>
        <p>GitHub: <a href="https://github.com/Taner940706" target="_blank">https://github.com/Taner940706</a></p>
        <p>SoftUni: <a href="https://softuni.bg/users/profile/certificates?username=taner_ismail" target="_blank">https://softuni.bg/users/profile/certificates?username=taner_ismail</a></p>
      </div>
    </div>
  </div>
</div>`
export async function AboutPage(ctx) {
    ctx.render(AboutTemplate)
}