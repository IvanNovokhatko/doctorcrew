import{a as q,S as O,N as D,P as V,A as K,i as P}from"./assets/vendor-8dsZYxcz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const n=document.querySelector(".burger-btn"),b=document.querySelector(".nav-wrapper"),c=document.querySelector(".menu-overlay");if(n&&b){const e=()=>{n.classList.add("is-open"),b.classList.add("is-open"),c==null||c.classList.add("is-open"),n.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},t=()=>{n.classList.remove("is-open"),b.classList.remove("is-open"),c==null||c.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),document.body.style.overflow=""};n.addEventListener("click",()=>{n.classList.contains("is-open")?t():e()}),b.querySelectorAll(".nav-link, .header-btn").forEach(s=>{s.addEventListener("click",t)}),c==null||c.addEventListener("click",t),document.addEventListener("keydown",s=>{s.key==="Escape"&&n.classList.contains("is-open")&&(t(),n.focus())})}const H=document.querySelector(".pets-section__filter-list"),z=document.querySelector(".pets-section__pets-list"),F=document.querySelector(".pets-section__button"),j=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let l=8,h;const Q=e=>{const t=[...e].sort((s,i)=>j.indexOf(s.name)-j.indexOf(i.name)).map(s=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${s._id}">${s.name}</button>
    </li>`).join("");H.insertAdjacentHTML("beforeend",t)},J=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
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
    </li>`).join("");z.insertAdjacentHTML("beforeend",t)},U=async()=>{try{const e=await q.get("https://paw-hut.b.goit.study/api/categories");Q(e.data)}catch(e){console.error(e)}},L=async e=>{try{const t=await q.get("https://paw-hut.b.goit.study/api/animals",e);z.innerHTML="",J(t.data.animals)}catch(t){console.error(t)}},Y=e=>{U()},Z=e=>{e.target.classList.contains("filter-list__button")&&(F.classList.remove("is-hidden"),H.querySelectorAll(".filter-list__button").forEach(t=>{t.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?l=9:l=8,e.target.classList.add("is-active"),h=e.target.dataset.id,h==="all"?L({params:{limit:l}}).catch(t=>{console.log(t)}):L({params:{limit:l,categoryId:h}}).catch(t=>{console.log(t)}))},ee=e=>{F.classList.remove("is-hidden"),window.matchMedia("(min-width: 1440px)").matches?l=9:l=8,h==="all"?L({params:{limit:l}}).catch(t=>{console.log(t)}):L({params:{limit:l,categoryId:h}}).catch(t=>{console.log(t)})};document.addEventListener("DOMContentLoaded",Y);H.addEventListener("click",Z);window.addEventListener("resize",ee);const te=document.querySelector(".pets-section__pets-list"),x=document.querySelector(".pets-section__button");let m=document.querySelector(".filter-list__button.is-active"),p=8,f=m.dataset.id,d=1,T,N=500;const se=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
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
    </li>`).join("");te.insertAdjacentHTML("beforeend",t)},X=async e=>{try{const t=await q.get("https://paw-hut.b.goit.study/api/animals",e);T=Math.ceil(t.data.totalItems/p),se(t.data.animals)}catch(t){console.error(t)}},oe=e=>{m=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,m.dataset.id!==f&&(d=1,f=m.dataset.id),d+=1,f==="all"?X({params:{limit:p,page:d}}).catch(t=>{console.log(t)}).finally(()=>{d>=T&&x.classList.add("is-hidden"),window.scrollBy({top:N*2,left:0,behavior:"smooth"})}):X({params:{limit:p,categoryId:f,page:d}}).catch(t=>{console.log(t)}).finally(()=>{d>=T&&x.classList.add("is-hidden"),window.scrollBy({top:N*2,left:0,behavior:"smooth"})})},ie=e=>{m=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,d=1,f=m.dataset.id};x.addEventListener("click",oe);window.addEventListener("resize",ie);new O(".mySwiper",{modules:[D,V],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const _="/doctorcrew/assets/icons-BWI8A0QE.svg";new K(".accordion-container",{duration:400,showMultiple:!1,onOpen(e){e.querySelector(".faq-icon use").setAttribute("href",`${_}#close`)},onClose(e){e.querySelector(".faq-icon use").setAttribute("href",`${_}#add`)}});async function ae(){return(await(await fetch("https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1")).json()).feedbacks}function re(e){let t="";for(let s=1;s<=5;s++)e>=s?t+=`
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

        ${re(Number(e.rate))}

        <p class="feedback-text">${e.description}</p>

        <p class="feedback-author">${e.author}</p>

      </div>
    </div>
  `}async function ce(){const e=await ae(),t=document.querySelector("#feedbacks-list");t.innerHTML=e.map(ne).join("")}document.addEventListener("DOMContentLoaded",async()=>{await ce(),new O(".swiper__success-swiper",{modules:[D,V],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,navigation:{nextEl:".success-swiper__button-next",prevEl:".success-swiper__button-prev"},pagination:{el:".success-swiper__pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}})});const le=document.querySelector(".modal-overlay"),de=document.querySelector(".pets-section__pets-list"),I=document.querySelector("body"),W=document.querySelector(".animal-modal"),g=document.querySelector(".animal-modal-backdrop"),pe=document.querySelector(".modal-button");let r,G;const E=()=>{I.classList.remove("no-scroll"),g.classList.remove("is-open"),setTimeout(()=>{W.innerHTML=""},250)},ue=()=>{const e=()=>`<button class="animal-modal__animal-close-button is-animal-close-button">
      <svg class="animal-close-button__icon is-animal-close-button" width="24" height="24">
        <use class="is-animal-close-button" href="${_}#close"></use>
      </svg>
    </button>

    <div class="animal-modal__wrapper">
      <img class="animal-modal__image" src="${r.querySelector(".pets-list__image").src}" alt="dog" />

      <div class="animal-modal__content-wrapper">
        <p class="animal-modal__species">${r.querySelector(".pets-list__species").textContent}</p>
        <h2 class="animal-modal__name">${r.querySelector(".pets-list__name").textContent}</h2>
        <div class="animal-modal__age-gender-wrapper">
          <p class="animal-modal__age">${r.querySelector(".pets-list__age").textContent}</p>
          <p class="animal-modal__gender">${r.querySelector(".pets-list__gender").textContent}</p>
        </div>
        <h3 class="animal-modal__description-title">Опис:</h3>
        <p class="animal-modal__description">
          ${r.querySelector(".pets-list__button").dataset.description}
        </p>
        <h3 class="animal-modal__health-title">Здоров’я:</h3>
        <p class="animal-modal__health">
          ${r.querySelector(".pets-list__button").dataset.health}
        </p>
        <h3 class="animal-modal__behavior-title">Поведінка:</h3>
        <p class="animal-modal__behavior">
          ${r.querySelector(".pets-list__button").dataset.behavior}
        </p>
        <button class="take-home-btn" data-id="${r.querySelector(".pets-list__button").dataset.id}">Взяти додому</button>
      </div>
    </div>`;W.insertAdjacentHTML("beforeend",e())},me=e=>{e.target.classList.contains("pets-list__button")&&(G=e.target.dataset.id,g.classList.add("is-open"),I.classList.add("no-scroll"),r=e.target.closest(".pets-list__item"),ue())},_e=e=>{e.target.classList.contains("is-animal-close-button")&&E()},fe=e=>{e.target.classList.contains("take-home-btn")&&(le.classList.add("is-open"),E(),I.classList.add("no-scroll"),pe.dataset.id=G)};de.addEventListener("click",me);g.addEventListener("click",_e);g.addEventListener("click",fe);window.addEventListener("keydown",e=>{e.key==="Escape"&&E()});g.addEventListener("click",e=>{e.target===e.currentTarget&&E()});const R=document.querySelector(".modal-overlay"),he=document.querySelector("[data-order-modal-close]"),ge=document.querySelector(".modal-form"),$=document.querySelector('[name="user-name"]'),y=$.nextElementSibling,S=document.querySelector('[name="user-phone"]'),v=S.nextElementSibling,k=document.querySelector('[name="user-comment"]'),w=k.nextElementSibling,be=document.querySelector(".modal-button");let A,C,B;const ye="https://paw-hut.b.goit.study/api/orders";function M(){R.classList.remove("is-open"),document.body.classList.remove("no-scroll")}he.addEventListener("click",M);window.addEventListener("keydown",e=>{e.key==="Escape"&&M()});R.addEventListener("click",e=>{e.target===e.currentTarget&&M()});ge.addEventListener("submit",async e=>{e.preventDefault();const t=$.value.trim(),s=S.value.trim();let i=k.value.trim();i===""&&(i="коментар відсутній");const o=be.dataset.id;if(ve(t),we(s),Le(i),A&&C&&B){const a={name:t,phone:s,animalId:o,comment:i};try{const u=await q.post(ye,a);P.success({title:"",message:`Ваше замовлення успішно збережено під номером ${u.data.orderNum}`})}catch{P.error({title:"",message:"Вибачте сталася помилка при надсиланні запиту"})}finally{e.target.reset(),M()}}});function ve(e){const t=s=>{y.classList.add("show-error"),$.classList.add("error-border"),y.innerHTML=`${s}`,A=!1};e===""?t(`Поле "Ім'я" обов'язкове до заповнення`):e.length>32?t("Ім'я не повинно перевищувати 32 символи"):/\d/.test(e)?t("Ім'я не повинно містити цифр"):(y.classList.remove("show-error"),$.classList.remove("error-border"),y.innerHTML="",A=!0)}function we(e){/^380\d{9}$/.test(e)?(v.classList.remove("show-error"),S.classList.remove("error-border"),v.innerHTML="",C=!0):(v.classList.add("show-error"),S.classList.add("error-border"),v.innerHTML="Введіть телефон у форматі 380XXXXXXXXX",C=!1)}function Le(e){e.length>500?(w.classList.add("show-error"),k.classList.add("error-border"),w.innerHTML="Коментар не повинен перевищувати 500 символів",B=!1):(w.classList.remove("show-error"),k.classList.remove("error-border"),w.innerHTML="",B=!0)}document.querySelector("#global-loader");
//# sourceMappingURL=index.js.map
