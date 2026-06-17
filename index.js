import{a as E,S as $,N as M,P as x,A}from"./assets/vendor-BeKveIiU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const i=document.querySelector(".burger-btn"),u=document.querySelector(".nav-wrapper"),a=document.querySelector(".menu-overlay");if(i&&u){const e=()=>{i.classList.add("is-open"),u.classList.add("is-open"),a==null||a.classList.add("is-open"),i.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},t=()=>{i.classList.remove("is-open"),u.classList.remove("is-open"),a==null||a.classList.remove("is-open"),i.setAttribute("aria-expanded","false"),document.body.style.overflow=""};i.addEventListener("click",()=>{i.classList.contains("is-open")?t():e()}),u.querySelectorAll(".nav-link, .header-btn").forEach(s=>{s.addEventListener("click",t)}),a==null||a.addEventListener("click",t),document.addEventListener("keydown",s=>{s.key==="Escape"&&i.classList.contains("is-open")&&(t(),i.focus())})}const k=document.querySelector(".pets-section__filter-list"),T=document.querySelector(".pets-section__pets-list"),S=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let c=8,d;const H=e=>{const t=[...e].sort((s,n)=>S.indexOf(s.name)-S.indexOf(n.name)).map(s=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${s._id}">${s.name}</button>
    </li>`).join("");k.insertAdjacentHTML("beforeend",t)},C=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(n=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${n.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${s.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${s.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${s.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${s._id}>Дізнатись більше</button>
    </li>`).join("");T.insertAdjacentHTML("beforeend",t)},I=async()=>{try{const e=await E.get("https://paw-hut.b.goit.study/api/categories");H(e.data)}catch(e){console.error(e)}},g=async e=>{try{const t=await E.get("https://paw-hut.b.goit.study/api/animals",e);T.innerHTML="",C(t.data.animals)}catch(t){console.error(t)}},N=e=>{I()},O=e=>{e.target.classList.contains("filter-list__button")&&(k.querySelectorAll(".filter-list__button").forEach(t=>{t.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,e.target.classList.add("is-active"),d=e.target.dataset.id,g(d==="all"?{params:{limit:c}}:{params:{limit:c,categoryId:d}}))},X=e=>{window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,g(d==="all"?{params:{limit:c}}:{params:{limit:c,categoryId:d}})};document.addEventListener("DOMContentLoaded",N);k.addEventListener("click",O);window.addEventListener("resize",X);new $(".mySwiper",{modules:[M,x],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const q="/doctorcrew/assets/icons-bv1T2WZQ.svg";new A(".accordion-container",{duration:400,showMultiple:!1,onOpen(e){e.querySelector(".faq-icon use").setAttribute("href",`${q}#close`)},onClose(e){e.querySelector(".faq-icon use").setAttribute("href",`${q}#add`)}});async function j(){return(await(await fetch("https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1")).json()).feedbacks}function B(e){let t="";for(let s=1;s<=5;s++)e>=s?t+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-filled"></use>
          </svg>
        </li>
      `:e>=s-.5?t+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-half"></use>
          </svg>
        </li>
      `:t+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-outline"></use>
          </svg>
        </li>
      `;return`<ul class="stars-feedback">${t}</ul>`}function D(e){return`
    <div class="swiper-slide">
      <div class="swiper-feedback">

        ${B(Number(e.rate))}

        <p class="feedback-text">${e.description}</p>

        <p class="feedback-author">${e.author}</p>

      </div>
    </div>
  `}async function V(){const e=await j(),t=document.querySelector("#feedbacks-list");t.innerHTML=e.map(D).join("")}document.addEventListener("DOMContentLoaded",async()=>{await V(),new $(".swiper__success-swiper",{modules:[M,x],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,navigation:{nextEl:".success-swiper__button-next",prevEl:".success-swiper__button-prev"},pagination:{el:".success-swiper__pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}})});const P=document.querySelector(".modal-overlay"),F=document.querySelector("[data-order-modal-close]"),W=document.querySelector(".modal-form"),h=document.querySelector('[name="user-name"]'),p=h.nextElementSibling,w=document.querySelector('[name="user-phone"]'),m=w.nextElementSibling,b=document.querySelector('[name="user-comment"]'),f=b.nextElementSibling,z=document.querySelector(".take-home-btn");let L,y,_;const G="https://paw-hut.b.goit.study/api/orders";function v(){P.classList.remove("is-open")}F.addEventListener("click",v);window.addEventListener("keydown",e=>{e.key==="Escape"&&v()});P.addEventListener("click",e=>{e.target===e.currentTarget&&v()});W.addEventListener("submit",async e=>{e.preventDefault();const t=h.value.trim(),s=w.value.trim();let n=b.value.trim();n===""&&(n="коментар відсутній");const r=z.dataset.id;if(console.log(t,s,n),K(t),Q(s),R(n),L&&y&&_){const o={name:t,phone:s,animalId:r,comment:n};try{const l=await E.post(G,o);console.log(`Ваше замовлення успішно збережено під номером ${l.data.orderNum}`),console.log(l.data)}catch{console.log("Вибачте сталася помилка при надсиланні запиту")}finally{e.target.reset(),v()}}});function K(e){const t=s=>{p.classList.add("show-error"),h.classList.add("error-border"),p.innerHTML=`${s}`,L=!1};e===""?t(`Поле "Ім'я" обов'язкове до заповнення`):e.length>32?t("Довжина ім'я не повинна перевищувати 32 символи"):/\d/.test(e)?t("Ім'я не повинно містити цифр"):(p.classList.remove("show-error"),h.classList.remove("error-border"),p.innerHTML="",L=!0)}function Q(e){/^380\d{9}$/.test(e)?(m.classList.remove("show-error"),w.classList.remove("error-border"),m.innerHTML="",y=!0):(m.classList.add("show-error"),w.classList.add("error-border"),m.innerHTML='Заповніть поле "Телефон" у форматі 380XXXXXXXXX',y=!1)}function R(e){e.length>500?(f.classList.add("show-error"),b.classList.add("error-border"),f.innerHTML="Довжина тексту не повинна перевищувати 500 символів",_=!1):(f.classList.remove("show-error"),b.classList.remove("error-border"),f.innerHTML="",_=!0)}document.querySelector("#global-loader");
//# sourceMappingURL=index.js.map
