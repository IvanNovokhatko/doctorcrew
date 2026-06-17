import{a as q,S as O,N as X,P as D,A as R}from"./assets/vendor-BeKveIiU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const r=document.querySelector(".burger-btn"),b=document.querySelector(".nav-wrapper"),l=document.querySelector(".menu-overlay");if(r&&b){const e=()=>{r.classList.add("is-open"),b.classList.add("is-open"),l==null||l.classList.add("is-open"),r.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},t=()=>{r.classList.remove("is-open"),b.classList.remove("is-open"),l==null||l.classList.remove("is-open"),r.setAttribute("aria-expanded","false"),document.body.style.overflow=""};r.addEventListener("click",()=>{r.classList.contains("is-open")?t():e()}),b.querySelectorAll(".nav-link, .header-btn").forEach(s=>{s.addEventListener("click",t)}),l==null||l.addEventListener("click",t),document.addEventListener("keydown",s=>{s.key==="Escape"&&r.classList.contains("is-open")&&(t(),r.focus())})}const B=document.querySelector(".pets-section__filter-list"),V=document.querySelector(".pets-section__pets-list"),z=document.querySelector(".pets-section__button"),I=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let c=8,f;const K=e=>{const t=[...e].sort((s,i)=>I.indexOf(s.name)-I.indexOf(i.name)).map(s=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${s._id}">${s.name}</button>
    </li>`).join("");B.insertAdjacentHTML("beforeend",t)},Q=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(i=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${i.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${s.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${s.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${s.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${s._id} data-description="${s.description}" data-health="${s.healthStatus}" data-behavior="${s.behavior}">Дізнатись більше</button>
    </li>`).join("");V.insertAdjacentHTML("beforeend",t)},Z=async()=>{try{const e=await q.get("https://paw-hut.b.goit.study/api/categories");K(e.data)}catch(e){console.error(e)}},L=async e=>{try{const t=await q.get("https://paw-hut.b.goit.study/api/animals",e);V.innerHTML="",Q(t.data.animals)}catch(t){console.error(t)}},J=e=>{Z()},U=e=>{e.target.classList.contains("filter-list__button")&&(z.classList.remove("is-hidden"),B.querySelectorAll(".filter-list__button").forEach(t=>{t.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,e.target.classList.add("is-active"),f=e.target.dataset.id,f==="all"?L({params:{limit:c}}).catch(t=>{console.log(t)}):L({params:{limit:c,categoryId:f}}).catch(t=>{console.log(t)}))},Y=e=>{z.classList.remove("is-hidden"),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,f==="all"?L({params:{limit:c}}).catch(t=>{console.log(t)}):L({params:{limit:c,categoryId:f}}).catch(t=>{console.log(t)})};document.addEventListener("DOMContentLoaded",J);B.addEventListener("click",U);window.addEventListener("resize",Y);const ee=document.querySelector(".pets-section__pets-list"),x=document.querySelector(".pets-section__button");let m=document.querySelector(".filter-list__button.is-active"),u=8,h=m.dataset.id,p=1,T,j=500;const te=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(i=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${i.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${s.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${s.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${s.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${s._id} data-description="${s.description}" data-health="${s.healthStatus}" data-behavior="${s.behavior}">Дізнатись більше</button>
    </li>`).join("");ee.insertAdjacentHTML("beforeend",t)},N=async e=>{try{const t=await q.get("https://paw-hut.b.goit.study/api/animals",e);T=Math.ceil(t.data.totalItems/u),te(t.data.animals)}catch(t){console.error(t)}},se=e=>{m=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?u=9:u=8,m.dataset.id!==h&&(p=1,h=m.dataset.id),p+=1,h==="all"?N({params:{limit:u,page:p}}).catch(t=>{console.log(t)}).finally(()=>{p>=T&&x.classList.add("is-hidden"),window.scrollBy({top:j*2,left:0,behavior:"smooth"})}):N({params:{limit:u,categoryId:h,page:p}}).catch(t=>{console.log(t)}).finally(()=>{p>=T&&x.classList.add("is-hidden"),window.scrollBy({top:j*2,left:0,behavior:"smooth"})})},oe=e=>{m=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?u=9:u=8,p=1,h=m.dataset.id};x.addEventListener("click",se);window.addEventListener("resize",oe);new O(".mySwiper",{modules:[X,D],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const _="/doctorcrew/assets/icons-bv1T2WZQ.svg";new R(".accordion-container",{duration:400,showMultiple:!1,onOpen(e){e.querySelector(".faq-icon use").setAttribute("href",`${_}#close`)},onClose(e){e.querySelector(".faq-icon use").setAttribute("href",`${_}#add`)}});async function ie(){return(await(await fetch("https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1")).json()).feedbacks}function ae(e){let t="";for(let s=1;s<=5;s++)e>=s?t+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="${_}#star-filled"></use>
          </svg>
        </li>
      `:e>=s-.5?t+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="${_}#star-half"></use>
          </svg>
        </li>
      `:t+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="${_}#star-outline"></use>
          </svg>
        </li>
      `;return`<ul class="stars-feedback">${t}</ul>`}function ne(e){return`
    <div class="swiper-slide">
      <div class="swiper-feedback">

        ${ae(Number(e.rate))}

        <p class="feedback-text">${e.description}</p>

        <p class="feedback-author">${e.author}</p>

      </div>
    </div>
  `}async function re(){const e=await ie(),t=document.querySelector("#feedbacks-list");t.innerHTML=e.map(ne).join("")}document.addEventListener("DOMContentLoaded",async()=>{await re(),new O(".swiper__success-swiper",{modules:[X,D],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,navigation:{nextEl:".success-swiper__button-next",prevEl:".success-swiper__button-prev"},pagination:{el:".success-swiper__pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}})});const le=document.querySelector(".modal-overlay"),ce=document.querySelector(".pets-section__pets-list"),P=document.querySelector("body"),F=document.querySelector(".animal-modal"),g=document.querySelector(".animal-modal-backdrop"),de=document.querySelector(".modal-button");let n,W;const E=()=>{P.classList.remove("no-scroll"),g.classList.remove("is-open"),setTimeout(()=>{F.innerHTML=""},250)},pe=()=>{const e=()=>`<button class="animal-modal__animal-close-button is-animal-close-button">
      <svg class="animal-close-button__icon is-animal-close-button" width="24" height="24">
        <use class="is-animal-close-button" href="${_}#close"></use>
      </svg>
    </button>

    <div class="animal-modal__wrapper">
      <img class="animal-modal__image" src="${n.querySelector(".pets-list__image").src}" alt="dog" />

      <div class="animal-modal__content-wrapper">
        <p class="animal-modal__species">${n.querySelector(".pets-list__species").textContent}</p>
        <h2 class="animal-modal__name">${n.querySelector(".pets-list__name").textContent}</h2>
        <div class="animal-modal__age-gender-wrapper">
          <p class="animal-modal__age">${n.querySelector(".pets-list__age").textContent}</p>
          <p class="animal-modal__gender">${n.querySelector(".pets-list__gender").textContent}</p>
        </div>
        <h3 class="animal-modal__description-title">Опис:</h3>
        <p class="animal-modal__description">
          ${n.querySelector(".pets-list__button").dataset.description}
        </p>
        <h3 class="animal-modal__health-title">Здоров’я:</h3>
        <p class="animal-modal__health">
          ${n.querySelector(".pets-list__button").dataset.health}
        </p>
        <h3 class="animal-modal__behavior-title">Поведінка:</h3>
        <p class="animal-modal__behavior">
          ${n.querySelector(".pets-list__button").dataset.behavior}
        </p>
        <button class="take-home-btn" data-id="${n.querySelector(".pets-list__button").dataset.id}">Взяти додому</button>
      </div>
    </div>`;F.insertAdjacentHTML("beforeend",e())},ue=e=>{e.target.classList.contains("pets-list__button")&&(W=e.target.dataset.id,g.classList.add("is-open"),P.classList.add("no-scroll"),n=e.target.closest(".pets-list__item"),pe())},me=e=>{e.target.classList.contains("is-animal-close-button")&&E()},_e=e=>{e.target.classList.contains("take-home-btn")&&(le.classList.add("is-open"),E(),P.classList.add("no-scroll"),de.dataset.id=W)};ce.addEventListener("click",ue);g.addEventListener("click",me);g.addEventListener("click",_e);window.addEventListener("keydown",e=>{e.key==="Escape"&&E()});g.addEventListener("click",e=>{e.target===e.currentTarget&&E()});const G=document.querySelector(".modal-overlay"),he=document.querySelector("[data-order-modal-close]"),fe=document.querySelector(".modal-form"),$=document.querySelector('[name="user-name"]'),v=$.nextElementSibling,S=document.querySelector('[name="user-phone"]'),y=S.nextElementSibling,k=document.querySelector('[name="user-comment"]'),w=k.nextElementSibling,ge=document.querySelector(".take-home-btn");let C,A,H;const be="https://paw-hut.b.goit.study/api/orders";function M(){G.classList.remove("is-open")}he.addEventListener("click",M);window.addEventListener("keydown",e=>{e.key==="Escape"&&M()});G.addEventListener("click",e=>{e.target===e.currentTarget&&M()});fe.addEventListener("submit",async e=>{e.preventDefault();const t=$.value.trim(),s=S.value.trim();let i=k.value.trim();i===""&&(i="коментар відсутній");const o=ge.dataset.id;if(console.log(t,s,i),ve(t),ye(s),we(i),C&&A&&H){const a={name:t,phone:s,animalId:o,comment:i};try{const d=await q.post(be,a);console.log(`Ваше замовлення успішно збережено під номером ${d.data.orderNum}`),console.log(d.data)}catch{console.log("Вибачте сталася помилка при надсиланні запиту")}finally{e.target.reset(),M()}}});function ve(e){const t=s=>{v.classList.add("show-error"),$.classList.add("error-border"),v.innerHTML=`${s}`,C=!1};e===""?t(`Поле "Ім'я" обов'язкове до заповнення`):e.length>32?t("Довжина ім'я не повинна перевищувати 32 символи"):/\d/.test(e)?t("Ім'я не повинно містити цифр"):(v.classList.remove("show-error"),$.classList.remove("error-border"),v.innerHTML="",C=!0)}function ye(e){/^380\d{9}$/.test(e)?(y.classList.remove("show-error"),S.classList.remove("error-border"),y.innerHTML="",A=!0):(y.classList.add("show-error"),S.classList.add("error-border"),y.innerHTML='Заповніть поле "Телефон" у форматі 380XXXXXXXXX',A=!1)}function we(e){e.length>500?(w.classList.add("show-error"),k.classList.add("error-border"),w.innerHTML="Довжина тексту не повинна перевищувати 500 символів",H=!1):(w.classList.remove("show-error"),k.classList.remove("error-border"),w.innerHTML="",H=!0)}document.querySelector("#global-loader");
//# sourceMappingURL=index.js.map
