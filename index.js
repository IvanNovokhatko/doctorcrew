import{a as k,S as I,N as C,P as j,A as D}from"./assets/vendor-BeKveIiU.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const n=document.querySelector(".burger-btn"),h=document.querySelector(".nav-wrapper"),a=document.querySelector(".menu-overlay");if(n&&h){const t=()=>{n.classList.add("is-open"),h.classList.add("is-open"),a==null||a.classList.add("is-open"),n.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},e=()=>{n.classList.remove("is-open"),h.classList.remove("is-open"),a==null||a.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),document.body.style.overflow=""};n.addEventListener("click",()=>{n.classList.contains("is-open")?e():t()}),h.querySelectorAll(".nav-link, .header-btn").forEach(s=>{s.addEventListener("click",e)}),a==null||a.addEventListener("click",e),document.addEventListener("keydown",s=>{s.key==="Escape"&&n.classList.contains("is-open")&&(e(),n.focus())})}const T=document.querySelector(".pets-section__filter-list"),N=document.querySelector(".pets-section__pets-list"),O=document.querySelector(".pets-section__button"),P=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let c=8,f;const V=t=>{const e=[...t].sort((s,r)=>P.indexOf(s.name)-P.indexOf(r.name)).map(s=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${s._id}">${s.name}</button>
    </li>`).join("");T.insertAdjacentHTML("beforeend",e)},z=t=>{const e=[...t].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(r=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${r.name}</p>
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
    </li>`).join("");N.insertAdjacentHTML("beforeend",e)},W=async()=>{try{const t=await k.get("https://paw-hut.b.goit.study/api/categories");V(t.data)}catch(t){console.error(t)}},y=async t=>{try{const e=await k.get("https://paw-hut.b.goit.study/api/animals",t);N.innerHTML="",z(e.data.animals)}catch(e){console.error(e)}},F=t=>{W()},G=t=>{t.target.classList.contains("filter-list__button")&&(O.classList.remove("is-hidden"),T.querySelectorAll(".filter-list__button").forEach(e=>{e.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,t.target.classList.add("is-active"),f=t.target.dataset.id,f==="all"?y({params:{limit:c}}).catch(e=>{console.log(e)}):y({params:{limit:c,categoryId:f}}).catch(e=>{console.log(e)}))},R=t=>{O.classList.remove("is-hidden"),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,f==="all"?y({params:{limit:c}}).catch(e=>{console.log(e)}):y({params:{limit:c,categoryId:f}}).catch(e=>{console.log(e)})};document.addEventListener("DOMContentLoaded",F);T.addEventListener("click",G);window.addEventListener("resize",R);const K=document.querySelector(".pets-section__pets-list"),E=document.querySelector(".pets-section__button");let u=document.querySelector(".filter-list__button.is-active"),p=8,m=u.dataset.id,d=1,q,H=500;const Q=t=>{const e=[...t].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(r=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${r.name}</p>
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
    </li>`).join("");K.insertAdjacentHTML("beforeend",e)},B=async t=>{try{const e=await k.get("https://paw-hut.b.goit.study/api/animals",t);q=Math.ceil(e.data.totalItems/p),Q(e.data.animals)}catch(e){console.error(e)}},Z=t=>{u=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,u.dataset.id!==m&&(d=1,m=u.dataset.id),d+=1,m==="all"?B({params:{limit:p,page:d}}).catch(e=>{console.log(e)}).finally(()=>{d>=q&&E.classList.add("is-hidden"),window.scrollBy({top:H*2,left:0,behavior:"smooth"})}):B({params:{limit:p,categoryId:m,page:d}}).catch(e=>{console.log(e)}).finally(()=>{d>=q&&E.classList.add("is-hidden"),window.scrollBy({top:H*2,left:0,behavior:"smooth"})})},J=t=>{u=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,d=1,m=u.dataset.id};E.addEventListener("click",Z);window.addEventListener("resize",J);new I(".mySwiper",{modules:[C,j],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const g="/doctorcrew/assets/icons-bv1T2WZQ.svg";new D(".accordion-container",{duration:400,showMultiple:!1,onOpen(t){t.querySelector(".faq-icon use").setAttribute("href",`${g}#close`)},onClose(t){t.querySelector(".faq-icon use").setAttribute("href",`${g}#add`)}});async function U(){return(await(await fetch("https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1")).json()).feedbacks}function Y(t){let e="";for(let s=1;s<=5;s++)t>=s?e+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="${g}#star-filled"></use>
          </svg>
        </li>
      `:t>=s-.5?e+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="${g}#star-half"></use>
          </svg>
        </li>
      `:e+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="${g}#star-outline"></use>
          </svg>
        </li>
      `;return`<ul class="stars-feedback">${e}</ul>`}function ee(t){return`
    <div class="swiper-slide">
      <div class="swiper-feedback">

        ${Y(Number(t.rate))}

        <p class="feedback-text">${t.description}</p>

        <p class="feedback-author">${t.author}</p>

      </div>
    </div>
  `}async function te(){const t=await U(),e=document.querySelector("#feedbacks-list");e.innerHTML=t.map(ee).join("")}document.addEventListener("DOMContentLoaded",async()=>{await te(),new I(".swiper__success-swiper",{modules:[C,j],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,navigation:{nextEl:".success-swiper__button-next",prevEl:".success-swiper__button-prev"},pagination:{el:".success-swiper__pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}})});const X=document.querySelector(".modal-overlay"),se=document.querySelector("[data-order-modal-close]"),oe=document.querySelector(".modal-form"),v=document.querySelector('[name="user-name"]'),_=v.nextElementSibling,L=document.querySelector('[name="user-phone"]'),w=L.nextElementSibling,$=document.querySelector('[name="user-comment"]'),b=$.nextElementSibling,re=document.querySelector(".take-home-btn");let M,x,A;const ie="https://paw-hut.b.goit.study/api/orders";function S(){X.classList.remove("is-open")}se.addEventListener("click",S);window.addEventListener("keydown",t=>{t.key==="Escape"&&S()});X.addEventListener("click",t=>{t.target===t.currentTarget&&S()});oe.addEventListener("submit",async t=>{t.preventDefault();const e=v.value.trim(),s=L.value.trim();let r=$.value.trim();r===""&&(r="коментар відсутній");const o=re.dataset.id;if(console.log(e,s,r),ne(e),ae(s),ce(r),M&&x&&A){const i={name:e,phone:s,animalId:o,comment:r};try{const l=await k.post(ie,i);console.log(`Ваше замовлення успішно збережено під номером ${l.data.orderNum}`),console.log(l.data)}catch{console.log("Вибачте сталася помилка при надсиланні запиту")}finally{t.target.reset(),S()}}});function ne(t){const e=s=>{_.classList.add("show-error"),v.classList.add("error-border"),_.innerHTML=`${s}`,M=!1};t===""?e(`Поле "Ім'я" обов'язкове до заповнення`):t.length>32?e("Довжина ім'я не повинна перевищувати 32 символи"):/\d/.test(t)?e("Ім'я не повинно містити цифр"):(_.classList.remove("show-error"),v.classList.remove("error-border"),_.innerHTML="",M=!0)}function ae(t){/^380\d{9}$/.test(t)?(w.classList.remove("show-error"),L.classList.remove("error-border"),w.innerHTML="",x=!0):(w.classList.add("show-error"),L.classList.add("error-border"),w.innerHTML='Заповніть поле "Телефон" у форматі 380XXXXXXXXX',x=!1)}function ce(t){t.length>500?(b.classList.add("show-error"),$.classList.add("error-border"),b.innerHTML="Довжина тексту не повинна перевищувати 500 символів",A=!1):(b.classList.remove("show-error"),$.classList.remove("error-border"),b.innerHTML="",A=!0)}document.querySelector("#global-loader");
//# sourceMappingURL=index.js.map
