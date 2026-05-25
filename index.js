import{a as B,R as P,C as V,S,N as M,P as E,A as N,b as h,K as D}from"./assets/vendor-BF4RIuOl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function H(e){const t=document.querySelector(".categories-desktop");if(!t)return;const s=[{_id:"all",name:"Всі десерти"},...e].map(({_id:r,name:o},a)=>`
      <label>
        <input
          type="radio"
          name="category"
          value="${r}"
          ${a===0?"checked":""}
        >
        <span class="category-name">
          ${o}
        </span>
      </label>
    `).join("");t.innerHTML=s}const R=new URL("/choco-bytes/assets/icons-qp2qQD9b.svg",import.meta.url).href;function j(e,t=!1){const n=document.querySelector(".desserts-list"),s=e.map(({_id:r,image:o,category:a,name:c,description:l,price:v})=>`
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${o}"
            alt="${c}"
          >

          <p class="dessert-card__category">${a.name}</p>

          <h3 class="dessert-card__title">${c}</h3>

          <p class="dessert-card__description">${l}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${v} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${r}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="${R}#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `).join("");t?n.insertAdjacentHTML("beforeend",s):n.innerHTML=s}function U(e){const t=document.querySelector(".categories-mobile");if(!t)return;const n=`
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${e.map(({_id:s,name:r})=>`
            <option value="${s}">
              ${r}
            </option>
          `).join("")}
    </select>
  `;t.innerHTML=n}const m=B.create({baseURL:"https://deserts-store.b.goit.study/api",timeout:1e4});async function K(){const{data:e}=await m.get("/categories");return e}async function W(e={}){const{data:t}=await m.get("/desserts",{params:e});return t}async function F(e){const{data:t}=await m.get(`/desserts/${e}`);return t}const C=document.querySelector(".loader");function Q(){C.classList.remove("is-hidden")}function z(){C.classList.add("is-hidden")}const d=document.querySelector("[data-modal]"),q=document.querySelector("[data-modal-close]"),f=document.querySelector(".dessert_modal_content"),$=document.querySelector(".dessert-modal__media");let L=null;function G(e){return`
    <img class="modal-image" src="${e.image}" alt="${e.name}">
  `}function J(e){return`
    <h2 class="modal-title">${e.name}</h2>

    <p class="modal-price">${e.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${e.rate}"></div>
    </div>

    <p class="modal-description">${e.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${e.composition}
    </p>
  `}function X(e){return Math.round(e*2)/2}function Y(){if(!f)return;const e=f.querySelector(".rating-stars");if(!e)return;const t=Number(e.dataset.rating)||0,n=X(t);new P(e,{score:n,readOnly:!0,halfShow:!0,starType:"i",number:5}).init()}function Z(e){!f||!$||(L=e._id??e.id,$.innerHTML=G(e),f.innerHTML=J(e),Y())}function ee(){d&&(d.classList.add("is-modal-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",I))}function b(){d&&(d.classList.remove("is-modal-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",I))}function I(e){e.key==="Escape"&&b()}function te(e){e.target===e.currentTarget&&b()}q&&q.addEventListener("click",b);d&&d.addEventListener("click",te);d&&d.addEventListener("click",ne);function ne(e){e.target.closest("[data-order-open]")&&L&&(b(),window.dispatchEvent(new CustomEvent("order:open",{detail:{dessertId:L}})))}let y=1,k="all";const x=document.querySelector(".desserts_load-more-btn");async function g(e={},t=!1){Q();const n=await W(e);return j(n.desserts,t),z(),n}function w(e){const t=Math.ceil(e.totalItems/e.limit);x.hidden=y>=t}async function se(){y+=1;const e={page:y,limit:8};k!=="all"&&(e.category=k);const t=await g(e,!0);w(t)}async function re(){const e=await K();H(e),U(e);const t=await g({limit:8});w(t);const n=document.querySelector(".categories-select");n&&new V(n,{searchEnabled:!1,itemSelectText:"",shouldSort:!1}),document.querySelector(".desserts_categories-container").addEventListener("change",ae),x.addEventListener("click",se),document.querySelector(".desserts-list").addEventListener("click",oe)}function oe(e){const t=e.target.closest(".dessert-details-btn");if(!t)return;const n=t.dataset.id;T(n)}async function ae(e){const t=e.target.value;if(k=t,y=1,t==="all"){const n=await g({limit:8});w(n)}else{const n=await g({category:t,limit:8});w(n)}}async function T(e){const t=await F(e);Z(t),ee()}re();let p=null;function O(){if(window.innerWidth<768){p&&(p.destroy(!0,!0),p=null);return}p||(p=new S(".mySwiper",{modules:[M,E],loop:!1,slidesPerView:1,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev",disabledClass:"swiper-button-disabled"},pagination:{el:".swiper-container .swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}}))}O();window.addEventListener("resize",O);const _=document.querySelector(".accordion-container");_&&new N(_,{showMultiple:!1,duration:500});const ie=document.querySelector(".feedback-list"),ce=document.querySelector(".feedback-slider"),de=document.querySelector(".feedback-slider .swiper-button-next"),le=document.querySelector(".feedback-slider .swiper-button-prev"),ue=document.querySelector(".feedback-slider .swiper-pagination");let pe=1;const me=10;function fe(e){return e.map(({rate:t,description:n,author:s})=>`<li class="feedback-card swiper-slide">
    <div class="feedback-card-rating" data-rate=${t}>
   
    </div>
    <div class="feedback-container">
    <p class="feedback-card-description">"${n}"</p>
    <p class="feedback-card-author">${s}</p>
    </div>
        </li>`).join("")}function ye(){document.querySelectorAll(".feedback-card-rating").forEach(t=>{const n=t.getAttribute("data-rate");new P(t,{score:Number(n),readOnly:!0,halfShow:!0,round:{down:.26,up:.76},starType:"i",number:5}).init()})}function ge(){new S(ce,{modules:[M,E,D],slidesPerView:1,spaceBetween:20,loop:!1,pagination:{el:ue,clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:de,prevEl:le},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}async function we(){const e="https://deserts-store.b.goit.study/api/",t="feedbacks",n={page:pe,limit:me};try{const{data:s}=await B(`${e}${t}`,{params:n}),r=s.feedbacks||s;ie.innerHTML=fe(r),ye(),ge()}catch(s){h.fire({icon:"error",title:"Упс... Щось пішло не так",text:s.message})}}we();async function be(e={}){const{data:t}=await m.get("/desserts",{params:{type:"popular",...e}});return t}const u=document.querySelector(".popular-products");if(u){let n=function(o){return o.map(a=>`
        <div class="swiper-slide">
          ${r(a)}
        </div>
      `).join("")},r=function({_id:o,image:a,category:c,name:l,description:v,price:A}){return`
      <div class="dessert-card dessert-card--popular">
        <img class="dessert-card__image" src="${a}" alt="${l}">
        <p class="dessert-card__category">${(c==null?void 0:c.name)??""}</p>
        <h3 class="dessert-card__title">${l}</h3>
        <p class="dessert-card__description">${v}</p>

        <div class="dessert-card__block">
          <p class="dessert-card__price">${A} грн</p>

          <button type="button" class="dessert-details-btn" data-id="${o}">
            <svg class="dessert-details-btn__icon" width="24" height="24">
              <use href="${s}#icon-arrow-outward"></use>
            </svg>
          </button>
        </div>
      </div>
    `};const e=u.querySelector(".popular-products-wrapper");async function t(){const o=await be({page:1,limit:10});if(!(o!=null&&o.desserts)||o.desserts.length<3){u.style.display="none";return}e.innerHTML=n(o.desserts),new S(u.querySelector(".popular-products-slider"),{modules:[M,E,D],loop:!1,slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},navigation:{nextEl:u.querySelector(".popular-products-next"),prevEl:u.querySelector(".popular-products-prev"),disabledClass:"swiper-button-disabled"},pagination:{el:u.querySelector(".popular-products-pagination"),clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}}),e.addEventListener("click",a=>{const c=a.target.closest(".dessert-details-btn");if(!c)return;const l=c.dataset.id;l&&T(l)})}const s=new URL("/choco-bytes/assets/icons-qp2qQD9b.svg",import.meta.url).href;t().catch(o=>{console.error("Popular products error:",o)})}(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",n),e.menuLinks.forEach(r=>{r.addEventListener("click",n)});function t(){e.menu.classList.add("is-menu-open"),document.body.classList.add("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",s)}function n(){e.menu.classList.remove("is-menu-open"),document.body.classList.remove("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",s)}function s(r){r.key==="Escape"&&n()}})();async function ve(e){const{data:t}=await m.post("/orders",e);return t}const i={closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]"),form:document.querySelector(".order-form")};if(i.closeModalBtn&&i.modal&&i.form){let e=function(){i.modal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",t)},t=function(n){n.code==="Escape"&&e()};window.addEventListener("order:open",n=>{const{dessertId:s}=n.detail;i.modal.classList.remove("is-hidden"),document.body.classList.add("modal-open"),i.modal.dataset.dessertId=s,document.addEventListener("keydown",t)}),i.closeModalBtn.addEventListener("click",e),i.modal.addEventListener("click",n=>{n.target===i.modal&&e()}),i.form.addEventListener("submit",async n=>{n.preventDefault();const s=new FormData(n.currentTarget),o=(s.get("phone")||s.get("tel")||"").replace(/\D/g,""),a={dessertId:i.modal.dataset.dessertId,name:s.get("name"),phone:o,comment:s.get("comment")};try{await ve(a),h.fire({title:"Успішно!",text:"Ваше замовлення успішно виконане!",icon:"success",confirmButtonColor:"#f19898"}),i.form.reset(),e()}catch(c){console.error(c),h.fire({title:"Помилка замовлення",text:"Щось пішло не так при відправці замовлення. Перевірте, чи правильно вписані дані.",icon:"error",confirmButtonColor:"#080c0c"})}})}
//# sourceMappingURL=index.js.map
