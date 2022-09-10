import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


import { homePage } from './view/home.js';
import { searchPage } from './view/search.js';
import { createPage } from './view/create.js';
import { detailsPage } from './view/details.js';
//import { MyPage } from './view/about.js';


const main = document.querySelector('#content');


page('/', decorateContext, homePage);
page('/search', decorateContext, searchPage);
page('/details/:id', decorateContext, detailsPage);
//page('/about', decorateContext, MyPage);
page('/create', decorateContext, createPage);


page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);

    next();
}

  