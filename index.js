import{a as _,R as $,C as B,S as C,N as D,P,A as I}from"./assets/vendor-Cl5Ul_Kf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function O(e){const t=document.querySelector(".categories-desktop");if(!t)return;const r=[{_id:"all",name:"Всі десерти"},...e].map(({_id:n,name:o},i)=>`
      <label>
        <input
          type="radio"
          name="category"
          value="${n}"
          ${i===0?"checked":""}
        >
        <span class="category-name">
          ${o}
        </span>
      </label>
    `).join("");t.innerHTML=r}const T=new URL("/choco-bytes/assets/icons-qp2qQD9b.svg",import.meta.url).href;function A(e,t=!1){const s=document.querySelector(".desserts-list"),r=e.map(({_id:n,image:o,category:i,name:w,description:E,price:q})=>`
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${o}"
            alt="${w}"
          >

          <p class="dessert-card__category">${i.name}</p>

          <h3 class="dessert-card__title">${w}</h3>

          <p class="dessert-card__description">${E}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${q} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${n}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="${T}#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `).join("");t?s.insertAdjacentHTML("beforeend",r):s.innerHTML=r}function H(e){const t=document.querySelector(".categories-mobile");if(!t)return;const s=`
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${e.map(({_id:r,name:n})=>`
            <option value="${r}">
              ${n}
            </option>
          `).join("")}
    </select>
  `;t.innerHTML=s}const y=_.create({baseURL:"https://deserts-store.b.goit.study/api",timeout:1e4});async function N(){const{data:e}=await y.get("/categories");return e}async function x(e={}){const{data:t}=await y.get("/desserts",{params:e});return t}async function R(e){const{data:t}=await y.get(`/desserts/${e}`);return t}const v=document.querySelector(".loader");function j(){v.classList.remove("is-hidden")}function V(){v.classList.add("is-hidden")}const a=document.querySelector("[data-modal]"),L=document.querySelector("[data-modal-close]"),d=document.querySelector(".dessert_modal_content"),h=document.querySelector(".dessert-modal__media");let f=null;function W(e){return`
    <img class="modal-image" src="${e.image}" alt="${e.name}">
  `}function U(e){return`
    <h2 class="modal-title">${e.name}</h2>

    <p class="modal-price">${e.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${e.rate}"></div>
    </div>

    <p class="modal-description">${e.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${e.composition}
    </p>
  `}function z(e){return Math.round(e*2)/2}function F(){if(!d)return;const e=d.querySelector(".rating-stars");if(!e)return;const t=Number(e.dataset.rating)||0,s=z(t);new $(e,{score:s,readOnly:!0,halfShow:!0,starType:"i",number:5}).init()}function K(e){!d||!h||(f=e._id??e.id,h.innerHTML=W(e),d.innerHTML=U(e),F())}function Q(){a&&(a.classList.add("is-modal-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",M))}function p(){a&&(a.classList.remove("is-modal-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",M))}function M(e){e.key==="Escape"&&p()}function G(e){e.target===e.currentTarget&&p()}L&&L.addEventListener("click",p);a&&a.addEventListener("click",G);a&&a.addEventListener("click",J);function J(e){e.target.closest("[data-order-open]")&&f&&(p(),window.dispatchEvent(new CustomEvent("order:open",{detail:{dessertId:f}})))}let l=1,g="all";const S=document.querySelector(".desserts_load-more-btn");async function u(e={},t=!1){j();const s=await x(e);return A(s.desserts,t),V(),s}function m(e){const t=Math.ceil(e.totalItems/e.limit);S.hidden=l>=t}async function X(){l+=1;const e={page:l,limit:8};g!=="all"&&(e.category=g);const t=await u(e,!0);m(t)}async function Y(){const e=await N();O(e),H(e);const t=await u({limit:8});m(t);const s=document.querySelector(".categories-select");s&&new B(s,{searchEnabled:!1,itemSelectText:"",shouldSort:!1}),document.querySelector(".desserts_categories-container").addEventListener("change",ee),S.addEventListener("click",X),document.querySelector(".desserts-list").addEventListener("click",Z)}function Z(e){const t=e.target.closest(".dessert-details-btn");if(!t)return;const s=t.dataset.id;te(s)}async function ee(e){const t=e.target.value;if(g=t,l=1,t==="all"){const s=await u({limit:8});m(s)}else{const s=await u({category:t,limit:8});m(s)}}async function te(e){const t=await R(e);K(t),Q()}Y();let c=null;function k(){if(window.innerWidth<768){c&&(c.destroy(!0,!0),c=null);return}c||(c=new C(".mySwiper",{modules:[D,P],loop:!1,slidesPerView:1,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev",disabledClass:"swiper-button-disabled"},pagination:{el:".swiper-container .swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}}))}k();window.addEventListener("resize",k);const b=document.querySelector(".accordion-container");b&&new I(b,{showMultiple:!1,duration:500});(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",s),e.menuLinks.forEach(n=>{n.addEventListener("click",s)});function t(){e.menu.classList.add("is-menu-open"),document.body.classList.add("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",r)}function s(){e.menu.classList.remove("is-menu-open"),document.body.classList.remove("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",r)}function r(n){n.key==="Escape"&&s()}})();(()=>{const e={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-order-open")}})();
//# sourceMappingURL=index.js.map
