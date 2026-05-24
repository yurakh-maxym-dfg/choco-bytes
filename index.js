import{a as E,R as q,C as _,A as $}from"./assets/vendor-jb4a9kDY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function B(e){const t=document.querySelector(".categories-desktop");if(!t)return;const r=[{_id:"all",name:"Всі десерти"},...e].map(({_id:n,name:s},c)=>`
      <label>
        <input
          type="radio"
          name="category"
          value="${n}"
          ${c===0?"checked":""}
        >
        <span class="category-name">
          ${s}
        </span>
      </label>
    `).join("");t.innerHTML=r}function D(e,t=!1){const o=document.querySelector(".desserts-list"),r=e.map(({_id:n,image:s,category:c,name:y,description:k,price:S})=>`
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${s}"
            alt="${y}"
          >

          <p class="dessert-card__category">${c.name}</p>

          <h3 class="dessert-card__title">${y}</h3>

          <p class="dessert-card__description">${k}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${S} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${n}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="/img/icons.svg#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `).join("");t?o.insertAdjacentHTML("beforeend",r):o.innerHTML=r}function C(e){const t=document.querySelector(".categories-mobile");if(!t)return;const o=`
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${e.map(({_id:r,name:n})=>`
            <option value="${r}">
              ${n}
            </option>
          `).join("")}
    </select>
  `;t.innerHTML=o}const g=E.create({baseURL:"https://deserts-store.b.goit.study/api",timeout:1e4});async function T(){const{data:e}=await g.get("/categories");return e}async function A(e={}){const{data:t}=await g.get("/desserts",{params:e});return t}async function I(e){const{data:t}=await g.get(`/desserts/${e}`);return t}const M=document.querySelector(".loader");function O(){M.classList.remove("is-hidden")}function P(){M.classList.add("is-hidden")}const a=document.querySelector("[data-modal]"),L=document.querySelector("[data-modal-close]"),i=document.querySelector(".dessert_modal_content"),h=document.querySelector(".dessert-modal__media");let p=null;function H(e){return`
    <img class="modal-image" src="${e.image}" alt="${e.name}">
  `}function j(e){return`
    <h2 class="modal-title">${e.name}</h2>

    <p class="modal-price">${e.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${e.rate}"></div>
    </div>

    <p class="modal-description">${e.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${e.composition}
    </p>
  `}function x(e){return Math.round(e*2)/2}function N(){if(!i)return;const e=i.querySelector(".rating-stars");if(!e)return;const t=Number(e.dataset.rating)||0,o=x(t);new q(e,{score:o,readOnly:!0,halfShow:!0,starType:"i",number:5}).init()}function R(e){!i||!h||(p=e._id??e.id,h.innerHTML=H(e),i.innerHTML=j(e),N())}function W(){a&&(a.classList.add("is-modal-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",b))}function m(){a&&(a.classList.remove("is-modal-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",b))}function b(e){e.key==="Escape"&&m()}function F(e){e.target===e.currentTarget&&m()}L&&L.addEventListener("click",m);a&&a.addEventListener("click",F);a&&a.addEventListener("click",K);function K(e){e.target.closest("[data-order-open]")&&p&&(m(),window.dispatchEvent(new CustomEvent("order:open",{detail:{dessertId:p}})))}let d=1,f="all";const w=document.querySelector(".desserts_load-more-btn");async function l(e={},t=!1){O();const o=await A(e);return D(o.desserts,t),P(),o}function u(e){const t=Math.ceil(e.totalItems/e.limit);w.hidden=d>=t}async function U(){d+=1;const e={page:d,limit:8};f!=="all"&&(e.category=f);const t=await l(e,!0);u(t)}async function z(){const e=await T();B(e),C(e);const t=await l({limit:8});u(t);const o=document.querySelector(".categories-select");o&&new _(o,{searchEnabled:!1,itemSelectText:"",shouldSort:!1}),document.querySelector(".desserts_categories-container").addEventListener("change",J),w.addEventListener("click",U),document.querySelector(".desserts-list").addEventListener("click",G)}function G(e){const t=e.target.closest(".dessert-details-btn");if(!t)return;const o=t.dataset.id;Q(o)}async function J(e){const t=e.target.value;if(f=t,d=1,t==="all"){const o=await l({limit:8});u(o)}else{const o=await l({category:t,limit:8});u(o)}}async function Q(e){const t=await I(e);R(t),W()}z();const v=document.querySelector(".accordion-container");v&&new $(v,{showMultiple:!1,duration:500});(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",o),e.menuLinks.forEach(n=>{n.addEventListener("click",o)});function t(){e.menu.classList.add("is-menu-open"),document.body.classList.add("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",r)}function o(){e.menu.classList.remove("is-menu-open"),document.body.classList.remove("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",r)}function r(n){n.key==="Escape"&&o()}})();(()=>{const e={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-order-open")}})();
//# sourceMappingURL=index.js.map
