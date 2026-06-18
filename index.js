import{a as g,S as X,N as V,P as z,A as J,i as j}from"./assets/vendor-8dsZYxcz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const n=document.querySelector(".burger-btn"),w=document.querySelector(".nav-wrapper"),c=document.querySelector(".menu-overlay");if(n&&w){const e=()=>{n.classList.add("is-open"),w.classList.add("is-open"),c==null||c.classList.add("is-open"),n.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},t=()=>{n.classList.remove("is-open"),w.classList.remove("is-open"),c==null||c.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),document.body.style.overflow=""};n.addEventListener("click",()=>{n.classList.contains("is-open")?t():e()}),w.querySelectorAll(".nav-link, .header-btn").forEach(s=>{s.addEventListener("click",t)}),c==null||c.addEventListener("click",t),document.addEventListener("keydown",s=>{s.key==="Escape"&&n.classList.contains("is-open")&&(t(),n.focus())})}const I=document.querySelector(".pets-section__filter-list"),F=document.querySelector(".pets-section__pets-list"),W=document.querySelector(".pets-section__button"),D=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let l=8,f;const U=e=>{const t=[...e].sort((s,o)=>D.indexOf(s.name)-D.indexOf(o.name)).map(s=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${s._id}">${s.name}</button>
    </li>`).join("");I.insertAdjacentHTML("beforeend",t)},Y=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(o=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${o.name}</p>
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
    </li>`).join("");F.insertAdjacentHTML("beforeend",t)},Z=async()=>{try{const e=await g.get("https://paw-hut.b.goit.study/api/categories");U(e.data)}catch(e){console.error(e)}},$=async e=>{try{const t=await g.get("https://paw-hut.b.goit.study/api/animals",e);F.innerHTML="",Y(t.data.animals)}catch(t){console.error(t)}},ee=e=>{Z()},te=e=>{e.target.classList.contains("filter-list__button")&&(W.classList.remove("is-hidden"),I.querySelectorAll(".filter-list__button").forEach(t=>{t.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?l=9:l=8,e.target.classList.add("is-active"),f=e.target.dataset.id,f==="all"?$({params:{limit:l}}).catch(t=>{console.log(t)}):$({params:{limit:l,categoryId:f}}).catch(t=>{console.log(t)}))},se=e=>{W.classList.remove("is-hidden"),window.matchMedia("(min-width: 1440px)").matches?l=9:l=8,f==="all"?$({params:{limit:l}}).catch(t=>{console.log(t)}):$({params:{limit:l,categoryId:f}}).catch(t=>{console.log(t)})};document.addEventListener("DOMContentLoaded",ee);I.addEventListener("click",te);window.addEventListener("resize",se);const G=document.querySelector(".pets-section__pets-list");let x=8;const ie=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(o=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${o.name}</p>
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
    </li>`).join("");G.insertAdjacentHTML("beforeend",t)},oe=async e=>{try{const t=await g.get("https://paw-hut.b.goit.study/api/animals",e);G.innerHTML="",ie(t.data.animals)}catch(t){console.error(t)}},ae=e=>{window.matchMedia("(min-width: 1440px)").matches?x=9:x=8,oe({params:{limit:x}}).catch(t=>{console.log(t)})};document.addEventListener("DOMContentLoaded",ae);const re=document.querySelector(".pets-section__pets-list"),A=document.querySelector(".pets-section__button");let m=document.querySelector(".filter-list__button.is-active"),p=8,h=m.dataset.id,d=1,C,N=500;const ne=e=>{const t=[...e].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(o=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${o.name}</p>
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
    </li>`).join("");re.insertAdjacentHTML("beforeend",t)},O=async e=>{try{const t=await g.get("https://paw-hut.b.goit.study/api/animals",e);C=Math.ceil(t.data.totalItems/p),ne(t.data.animals)}catch(t){console.error(t)}},ce=e=>{m=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,m.dataset.id!==h&&(d=1,h=m.dataset.id),d+=1,h==="all"?O({params:{limit:p,page:d}}).catch(t=>{console.log(t)}).finally(()=>{d>=C&&A.classList.add("is-hidden"),window.scrollBy({top:N*2,left:0,behavior:"smooth"})}):O({params:{limit:p,categoryId:h,page:d}}).catch(t=>{console.log(t)}).finally(()=>{d>=C&&A.classList.add("is-hidden"),window.scrollBy({top:N*2,left:0,behavior:"smooth"})})},le=e=>{m=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,d=1,h=m.dataset.id};A.addEventListener("click",ce);window.addEventListener("resize",le);new X(".mySwiper",{modules:[V,z],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const _="/doctorcrew/assets/icons-BWI8A0QE.svg";new J(".accordion-container",{duration:400,showMultiple:!1,onOpen(e){e.querySelector(".faq-icon use").setAttribute("href",`${_}#close`)},onClose(e){e.querySelector(".faq-icon use").setAttribute("href",`${_}#add`)}});async function de(){return(await(await fetch("https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1")).json()).feedbacks}function pe(e){let t="";for(let s=1;s<=5;s++)e>=s?t+=`
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
      `;return`<ul class="stars-feedback">${t}</ul>`}function ue(e){return`
    <div class="swiper-slide">
      <div class="swiper-feedback">

        ${pe(Number(e.rate))}

        <p class="feedback-text">${e.description}</p>

        <p class="feedback-author">${e.author}</p>

      </div>
    </div>
  `}async function me(){const e=await de(),t=document.querySelector("#feedbacks-list");t.innerHTML=e.map(ue).join("")}document.addEventListener("DOMContentLoaded",async()=>{await me(),new X(".swiper__success-swiper",{modules:[V,z],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,navigation:{nextEl:".success-swiper__button-next",prevEl:".success-swiper__button-prev"},pagination:{el:".success-swiper__pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}})});const _e=document.querySelector(".modal-overlay"),he=document.querySelector(".pets-section__pets-list"),P=document.querySelector("body"),R=document.querySelector(".animal-modal"),b=document.querySelector(".animal-modal-backdrop"),fe=document.querySelector(".modal-button");let r,K;const M=()=>{P.classList.remove("no-scroll"),b.classList.remove("is-open"),setTimeout(()=>{R.innerHTML=""},250)},ge=()=>{const e=()=>`<button class="animal-modal__animal-close-button is-animal-close-button">
      <svg class="animal-close-button__icon is-animal-close-button" width="24" height="24">
        <use class="is-animal-close-button" href="${_}#close"></use>
      </svg>
    </button>

    <div class="animal-modal__wrapper">
      <img class="animal-modal__image" src="${r.querySelector(".pets-list__image").src}" alt="${r.querySelector(".pets-list__name").textContent}" />

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
    </div>`;R.insertAdjacentHTML("beforeend",e())},be=e=>{e.target.classList.contains("pets-list__button")&&(K=e.target.dataset.id,b.classList.add("is-open"),P.classList.add("no-scroll"),r=e.target.closest(".pets-list__item"),ge())},we=e=>{e.target.classList.contains("is-animal-close-button")&&M()},ye=e=>{e.target.classList.contains("take-home-btn")&&(_e.classList.add("is-open"),M(),P.classList.add("no-scroll"),fe.dataset.id=K)};he.addEventListener("click",be);b.addEventListener("click",we);b.addEventListener("click",ye);window.addEventListener("keydown",e=>{e.key==="Escape"&&M()});b.addEventListener("click",e=>{e.target===e.currentTarget&&M()});const Q=document.querySelector(".modal-overlay"),ve=document.querySelector("[data-order-modal-close]"),Le=document.querySelector(".modal-form"),S=document.querySelector('[name="user-name"]'),y=S.nextElementSibling,k=document.querySelector('[name="user-phone"]'),v=k.nextElementSibling,q=document.querySelector('[name="user-comment"]'),L=q.nextElementSibling,$e=document.querySelector(".modal-button");let T,H,B;const Se="https://paw-hut.b.goit.study/api/orders";function E(){Q.classList.remove("is-open"),document.body.classList.remove("no-scroll")}ve.addEventListener("click",E);window.addEventListener("keydown",e=>{e.key==="Escape"&&E()});Q.addEventListener("click",e=>{e.target===e.currentTarget&&E()});Le.addEventListener("submit",async e=>{e.preventDefault();const t=S.value.trim(),s=k.value.trim();let o=q.value.trim();o===""&&(o="коментар відсутній");const i=$e.dataset.id;if(ke(t),qe(s),Me(o),T&&H&&B){const a={name:t,phone:s,animalId:i,comment:o};try{const u=await g.post(Se,a);j.success({title:"",message:`Ваше замовлення успішно збережено під номером ${u.data.orderNum}`})}catch{j.error({title:"",message:"Вибачте сталася помилка при надсиланні запиту"})}finally{e.target.reset(),E()}}});function ke(e){const t=s=>{y.classList.add("show-error"),S.classList.add("error-border"),y.innerHTML=`${s}`,T=!1};e===""?t(`Поле "Ім'я" обов'язкове до заповнення`):e.length>32?t("Ім'я не повинно перевищувати 32 символи"):/\d/.test(e)?t("Ім'я не повинно містити цифр"):(y.classList.remove("show-error"),S.classList.remove("error-border"),y.innerHTML="",T=!0)}function qe(e){/^380\d{9}$/.test(e)?(v.classList.remove("show-error"),k.classList.remove("error-border"),v.innerHTML="",H=!0):(v.classList.add("show-error"),k.classList.add("error-border"),v.innerHTML="Введіть телефон у форматі 380XXXXXXXXX",H=!1)}function Me(e){e.length>500?(L.classList.add("show-error"),q.classList.add("error-border"),L.innerHTML="Коментар не повинен перевищувати 500 символів",B=!1):(L.classList.remove("show-error"),q.classList.remove("error-border"),L.innerHTML="",B=!0)}document.querySelector("#global-loader");
//# sourceMappingURL=index.js.map
