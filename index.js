import{a as u}from"./assets/vendor-D7zVIL2X.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const d=document.querySelector(".pets-section__filter-list"),m=document.querySelector(".pets-section__pets-list"),p=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let o=8,a;const f=t=>{const i=[...t].sort((e,n)=>p.indexOf(e.name)-p.indexOf(n.name)).map(e=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${e._id}">${e.name}</button>
    </li>`).join("");d.insertAdjacentHTML("beforeend",i)},_=t=>{const i=[...t].map(e=>`<li class="pets-list__item">
      <img src="${e.image}" alt="${e.name}" class="pets-list__image" />
      <p class="pets-list__species">${e.species}</p>
      <p class="pets-list__name">${e.name}</p>

      <ul class="pets-list__filter-marks">
        ${e.categories.map(n=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${n.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${e.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${e.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${e.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${e._id}>Дізнатись більше</button>
    </li>`).join("");m.insertAdjacentHTML("beforeend",i)},g=async()=>{try{const t=await u.get("https://paw-hut.b.goit.study/api/categories");f(t.data)}catch(t){console.error(t)}},c=async t=>{try{const i=await u.get("https://paw-hut.b.goit.study/api/animals",t);m.innerHTML="",_(i.data.animals)}catch(i){console.error(i)}},y=t=>{g()},h=t=>{t.target.classList.contains("filter-list__button")&&(d.querySelectorAll(".filter-list__button").forEach(i=>{i.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?o=9:o=8,t.target.classList.add("is-active"),a=t.target.dataset.id,c(a==="all"?{params:{limit:o}}:{params:{limit:o,categoryId:a}}))},L=t=>{window.matchMedia("(min-width: 1440px)").matches?o=9:o=8,c(a==="all"?{params:{limit:o}}:{params:{limit:o,categoryId:a}})};document.addEventListener("DOMContentLoaded",y);d.addEventListener("click",h);window.addEventListener("resize",L);
//# sourceMappingURL=index.js.map
