import{a as L,R as k,C as D,S as M,N as S,P as E,A as I,b as T,K as A}from"./assets/vendor-BF4RIuOl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function O(e){const t=document.querySelector(".categories-desktop");if(!t)return;const r=[{_id:"all",name:"Всі десерти"},...e].map(({_id:s,name:o},i)=>`
      <label>
        <input
          type="radio"
          name="category"
          value="${s}"
          ${i===0?"checked":""}
        >
        <span class="category-name">
          ${o}
        </span>
      </label>
    `).join("");t.innerHTML=r}const x=new URL("/choco-bytes/assets/icons-qp2qQD9b.svg",import.meta.url).href;function N(e,t=!1){const n=document.querySelector(".desserts-list"),r=e.map(({_id:s,image:o,category:i,name:w,description:P,price:C})=>`
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${o}"
            alt="${w}"
          >

          <p class="dessert-card__category">${i.name}</p>

          <h3 class="dessert-card__title">${w}</h3>

          <p class="dessert-card__description">${P}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${C} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${s}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="${x}#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `).join("");t?n.insertAdjacentHTML("beforeend",r):n.innerHTML=r}function H(e){const t=document.querySelector(".categories-mobile");if(!t)return;const n=`
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${e.map(({_id:r,name:s})=>`
            <option value="${r}">
              ${s}
            </option>
          `).join("")}
    </select>
  `;t.innerHTML=n}const g=L.create({baseURL:"https://deserts-store.b.goit.study/api",timeout:1e4});async function R(){const{data:e}=await g.get("/categories");return e}async function V(e={}){const{data:t}=await g.get("/desserts",{params:e});return t}async function j(e){const{data:t}=await g.get(`/desserts/${e}`);return t}const q=document.querySelector(".loader");function K(){q.classList.remove("is-hidden")}function U(){q.classList.add("is-hidden")}const a=document.querySelector("[data-modal]"),b=document.querySelector("[data-modal-close]"),d=document.querySelector(".dessert_modal_content"),h=document.querySelector(".dessert-modal__media");let f=null;function W(e){return`
    <img class="modal-image" src="${e.image}" alt="${e.name}">
  `}function z(e){return`
    <h2 class="modal-title">${e.name}</h2>

    <p class="modal-price">${e.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${e.rate}"></div>
    </div>

    <p class="modal-description">${e.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${e.composition}
    </p>
  `}function F(e){return Math.round(e*2)/2}function Q(){if(!d)return;const e=d.querySelector(".rating-stars");if(!e)return;const t=Number(e.dataset.rating)||0,n=F(t);new k(e,{score:n,readOnly:!0,halfShow:!0,starType:"i",number:5}).init()}function G(e){!d||!h||(f=e._id??e.id,h.innerHTML=W(e),d.innerHTML=z(e),Q())}function J(){a&&(a.classList.add("is-modal-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",$))}function m(){a&&(a.classList.remove("is-modal-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",$))}function $(e){e.key==="Escape"&&m()}function X(e){e.target===e.currentTarget&&m()}b&&b.addEventListener("click",m);a&&a.addEventListener("click",X);a&&a.addEventListener("click",Y);function Y(e){e.target.closest("[data-order-open]")&&f&&(m(),window.dispatchEvent(new CustomEvent("order:open",{detail:{dessertId:f}})))}let l=1,y="all";const B=document.querySelector(".desserts_load-more-btn");async function u(e={},t=!1){K();const n=await V(e);return N(n.desserts,t),U(),n}function p(e){const t=Math.ceil(e.totalItems/e.limit);B.hidden=l>=t}async function Z(){l+=1;const e={page:l,limit:8};y!=="all"&&(e.category=y);const t=await u(e,!0);p(t)}async function ee(){const e=await R();O(e),H(e);const t=await u({limit:8});p(t);const n=document.querySelector(".categories-select");n&&new D(n,{searchEnabled:!1,itemSelectText:"",shouldSort:!1}),document.querySelector(".desserts_categories-container").addEventListener("change",ne),B.addEventListener("click",Z),document.querySelector(".desserts-list").addEventListener("click",te)}function te(e){const t=e.target.closest(".dessert-details-btn");if(!t)return;const n=t.dataset.id;se(n)}async function ne(e){const t=e.target.value;if(y=t,l=1,t==="all"){const n=await u({limit:8});p(n)}else{const n=await u({category:t,limit:8});p(n)}}async function se(e){const t=await j(e);G(t),J()}ee();let c=null;function _(){if(window.innerWidth<768){c&&(c.destroy(!0,!0),c=null);return}c||(c=new M(".mySwiper",{modules:[S,E],loop:!1,slidesPerView:1,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev",disabledClass:"swiper-button-disabled"},pagination:{el:".swiper-container .swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}}))}_();window.addEventListener("resize",_);const v=document.querySelector(".accordion-container");v&&new I(v,{showMultiple:!1,duration:500});const re=document.querySelector(".feedback-list"),oe=document.querySelector(".feedback-slider"),ae=document.querySelector(".feedback-slider .swiper-button-next"),ie=document.querySelector(".feedback-slider .swiper-button-prev"),ce=document.querySelector(".feedback-slider .swiper-pagination");let de=1;const le=10;function ue(e){return e.map(({rate:t,description:n,author:r})=>`<li class="feedback-card swiper-slide">
    <div class="feedback-card-rating" data-rate=${t}>
   
    </div>
    <div class="feedback-container">
    <p class="feedback-card-description">"${n}"</p>
    <p class="feedback-card-author">${r}</p>
    </div>
        </li>`).join("")}function pe(){document.querySelectorAll(".feedback-card-rating").forEach(t=>{const n=t.getAttribute("data-rate");new k(t,{score:Number(n),readOnly:!0,halfShow:!0,round:{down:.26,up:.76},starType:"i",number:5}).init()})}function me(){new M(oe,{modules:[S,E,A],slidesPerView:1,spaceBetween:20,loop:!1,pagination:{el:ce,clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:ae,prevEl:ie},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}async function fe(){const e="https://deserts-store.b.goit.study/api/",t="feedbacks",n={page:de,limit:le};try{const{data:r}=await L(`${e}${t}`,{params:n}),s=r.feedbacks||r;re.innerHTML=ue(s),pe(),me()}catch(r){T.fire({icon:"error",title:"Упс... Щось пішло не так",text:r.message})}}fe();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",n),e.menuLinks.forEach(s=>{s.addEventListener("click",n)});function t(){e.menu.classList.add("is-menu-open"),document.body.classList.add("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",r)}function n(){e.menu.classList.remove("is-menu-open"),document.body.classList.remove("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",r)}function r(s){s.key==="Escape"&&n()}})();(()=>{const e={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-order-open")}})();
//# sourceMappingURL=index.js.map
