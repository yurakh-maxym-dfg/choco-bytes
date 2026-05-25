import{a as E,R as _,C as O,S as L,N as k,P as S,A,b as V,K as B}from"./assets/vendor-BF4RIuOl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function N(e){const t=document.querySelector(".categories-desktop");if(!t)return;const a=[{_id:"all",name:"Всі десерти"},...e].map(({_id:s,name:r},o)=>`
      <label>
        <input
          type="radio"
          name="category"
          value="${s}"
          ${o===0?"checked":""}
        >
        <span class="category-name">
          ${r}
        </span>
      </label>
    `).join("");t.innerHTML=a}const H=new URL("/choco-bytes/assets/icons-qp2qQD9b.svg",import.meta.url).href;function R(e,t=!1){const n=document.querySelector(".desserts-list"),a=e.map(({_id:s,image:r,category:o,name:i,description:d,price:b})=>`
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${r}"
            alt="${i}"
          >

          <p class="dessert-card__category">${o.name}</p>

          <h3 class="dessert-card__title">${i}</h3>

          <p class="dessert-card__description">${d}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${b} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${s}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="${H}#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `).join("");t?n.insertAdjacentHTML("beforeend",a):n.innerHTML=a}function j(e){const t=document.querySelector(".categories-mobile");if(!t)return;const n=`
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${e.map(({_id:a,name:s})=>`
            <option value="${a}">
              ${s}
            </option>
          `).join("")}
    </select>
  `;t.innerHTML=n}const g=E.create({baseURL:"https://deserts-store.b.goit.study/api",timeout:1e4});async function U(){const{data:e}=await g.get("/categories");return e}async function K(e={}){const{data:t}=await g.get("/desserts",{params:e});return t}async function W(e){const{data:t}=await g.get(`/desserts/${e}`);return t}const P=document.querySelector(".loader");function Q(){P.classList.remove("is-hidden")}function z(){P.classList.add("is-hidden")}const c=document.querySelector("[data-modal]"),M=document.querySelector("[data-modal-close]"),p=document.querySelector(".dessert_modal_content"),q=document.querySelector(".dessert-modal__media");let v=null;function F(e){return`
    <img class="modal-image" src="${e.image}" alt="${e.name}">
  `}function G(e){return`
    <h2 class="modal-title">${e.name}</h2>

    <p class="modal-price">${e.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${e.rate}"></div>
    </div>

    <p class="modal-description">${e.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${e.composition}
    </p>
  `}function J(e){return Math.round(e*2)/2}function X(){if(!p)return;const e=p.querySelector(".rating-stars");if(!e)return;const t=Number(e.dataset.rating)||0,n=J(t);new _(e,{score:n,readOnly:!0,halfShow:!0,starType:"i",number:5}).init()}function Y(e){!p||!q||(v=e._id??e.id,q.innerHTML=F(e),p.innerHTML=G(e),X())}function Z(){c&&(c.classList.add("is-modal-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",C))}function w(){c&&(c.classList.remove("is-modal-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",C))}function C(e){e.key==="Escape"&&w()}function ee(e){e.target===e.currentTarget&&w()}M&&M.addEventListener("click",w);c&&c.addEventListener("click",ee);c&&c.addEventListener("click",te);function te(e){e.target.closest("[data-order-open]")&&v&&(w(),window.dispatchEvent(new CustomEvent("order:open",{detail:{dessertId:v}})))}let m=1,h="all";const D=document.querySelector(".desserts_load-more-btn");async function f(e={},t=!1){Q();const n=await K(e);return R(n.desserts,t),z(),n}function y(e){const t=Math.ceil(e.totalItems/e.limit);D.hidden=m>=t}async function ne(){m+=1;const e={page:m,limit:8};h!=="all"&&(e.category=h);const t=await f(e,!0);y(t)}async function se(){const e=await U();N(e),j(e);const t=await f({limit:8});y(t);const n=document.querySelector(".categories-select");n&&new O(n,{searchEnabled:!1,itemSelectText:"",shouldSort:!1}),document.querySelector(".desserts_categories-container").addEventListener("change",ae),D.addEventListener("click",ne),document.querySelector(".desserts-list").addEventListener("click",re)}function re(e){const t=e.target.closest(".dessert-details-btn");if(!t)return;const n=t.dataset.id;I(n)}async function ae(e){const t=e.target.value;if(h=t,m=1,t==="all"){const n=await f({limit:8});y(n)}else{const n=await f({category:t,limit:8});y(n)}}async function I(e){const t=await W(e);Y(t),Z()}se();let u=null;function T(){if(window.innerWidth<768){u&&(u.destroy(!0,!0),u=null);return}u||(u=new L(".mySwiper",{modules:[k,S],loop:!1,slidesPerView:1,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev",disabledClass:"swiper-button-disabled"},pagination:{el:".swiper-container .swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}}))}T();window.addEventListener("resize",T);const $=document.querySelector(".accordion-container");$&&new A($,{showMultiple:!1,duration:500});const oe=document.querySelector(".feedback-list"),ie=document.querySelector(".feedback-slider"),ce=document.querySelector(".feedback-slider .swiper-button-next"),de=document.querySelector(".feedback-slider .swiper-button-prev"),le=document.querySelector(".feedback-slider .swiper-pagination");let ue=1;const pe=10;function me(e){return e.map(({rate:t,description:n,author:a})=>`<li class="feedback-card swiper-slide">
    <div class="feedback-card-rating" data-rate=${t}>
   
    </div>
    <div class="feedback-container">
    <p class="feedback-card-description">"${n}"</p>
    <p class="feedback-card-author">${a}</p>
    </div>
        </li>`).join("")}function fe(){document.querySelectorAll(".feedback-card-rating").forEach(t=>{const n=t.getAttribute("data-rate");new _(t,{score:Number(n),readOnly:!0,halfShow:!0,round:{down:.26,up:.76},starType:"i",number:5}).init()})}function ye(){new L(ie,{modules:[k,S,B],slidesPerView:1,spaceBetween:20,loop:!1,pagination:{el:le,clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:ce,prevEl:de},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}async function ge(){const e="https://deserts-store.b.goit.study/api/",t="feedbacks",n={page:ue,limit:pe};try{const{data:a}=await E(`${e}${t}`,{params:n}),s=a.feedbacks||a;oe.innerHTML=me(s),fe(),ye()}catch(a){V.fire({icon:"error",title:"Упс... Щось пішло не так",text:a.message})}}ge();async function we(e={}){const{data:t}=await g.get("/desserts",{params:{type:"popular",...e}});return t}const l=document.querySelector(".popular-products");if(l){let n=function(r){return r.map(o=>`
        <div class="swiper-slide">
          ${s(o)}
        </div>
      `).join("")},s=function({_id:r,image:o,category:i,name:d,description:b,price:x}){return`
      <div class="dessert-card dessert-card--popular">
        <img class="dessert-card__image" src="${o}" alt="${d}">
        <p class="dessert-card__category">${(i==null?void 0:i.name)??""}</p>
        <h3 class="dessert-card__title">${d}</h3>
        <p class="dessert-card__description">${b}</p>

        <div class="dessert-card__block">
          <p class="dessert-card__price">${x} грн</p>

          <button type="button" class="dessert-details-btn" data-id="${r}">
            <svg class="dessert-details-btn__icon" width="24" height="24">
              <use href="${a}#icon-arrow-outward"></use>
            </svg>
          </button>
        </div>
      </div>
    `};const e=l.querySelector(".popular-products-wrapper");async function t(){const r=await we({page:1,limit:10});if(!(r!=null&&r.desserts)||r.desserts.length<3){l.style.display="none";return}e.innerHTML=n(r.desserts),new L(l.querySelector(".popular-products-slider"),{modules:[k,S,B],loop:!1,slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},navigation:{nextEl:l.querySelector(".popular-products-next"),prevEl:l.querySelector(".popular-products-prev"),disabledClass:"swiper-button-disabled"},pagination:{el:l.querySelector(".popular-products-pagination"),clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}}),e.addEventListener("click",o=>{const i=o.target.closest(".dessert-details-btn");if(!i)return;const d=i.dataset.id;d&&I(d)})}const a=new URL("/choco-bytes/assets/icons-qp2qQD9b.svg",import.meta.url).href;t().catch(r=>{console.error("Popular products error:",r)})}(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",n),e.menuLinks.forEach(s=>{s.addEventListener("click",n)});function t(){e.menu.classList.add("is-menu-open"),document.body.classList.add("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",a)}function n(){e.menu.classList.remove("is-menu-open"),document.body.classList.remove("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",a)}function a(s){s.key==="Escape"&&n()}})();(()=>{const e={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-order-open")}})();
//# sourceMappingURL=index.js.map
