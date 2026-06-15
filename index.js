import{a as _}from"./assets/vendor-D7zVIL2X.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const n=document.querySelector(".burger-btn"),d=document.querySelector(".nav-wrapper"),o=document.querySelector(".menu-overlay");if(n&&d){const t=()=>{n.classList.add("is-open"),d.classList.add("is-open"),o==null||o.classList.add("is-open"),n.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},s=()=>{n.classList.remove("is-open"),d.classList.remove("is-open"),o==null||o.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),document.body.style.overflow=""};n.addEventListener("click",()=>{n.classList.contains("is-open")?s():t()}),d.querySelectorAll(".nav-link, .header-btn").forEach(e=>{e.addEventListener("click",s)}),o==null||o.addEventListener("click",s),document.addEventListener("keydown",e=>{e.key==="Escape"&&n.classList.contains("is-open")&&(s(),n.focus())})}const m=document.querySelector(".pets-section__filter-list"),g=document.querySelector(".pets-section__pets-list"),f=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let c=8,l;const L=t=>{const s=[...t].sort((e,a)=>f.indexOf(e.name)-f.indexOf(a.name)).map(e=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${e._id}">${e.name}</button>
    </li>`).join("");m.insertAdjacentHTML("beforeend",s)},y=t=>{const s=[...t].map(e=>`<li class="pets-list__item">
      <img src="${e.image}" alt="${e.name}" class="pets-list__image" />
      <p class="pets-list__species">${e.species}</p>
      <p class="pets-list__name">${e.name}</p>

      <ul class="pets-list__filter-marks">
        ${e.categories.map(a=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${a.name}</p>
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
    </li>`).join("");g.insertAdjacentHTML("beforeend",s)},b=async()=>{try{const t=await _.get("https://paw-hut.b.goit.study/api/categories");L(t.data)}catch(t){console.error(t)}},p=async t=>{try{const s=await _.get("https://paw-hut.b.goit.study/api/animals",t);g.innerHTML="",y(s.data.animals)}catch(s){console.error(s)}},h=t=>{b()},w=t=>{t.target.classList.contains("filter-list__button")&&(m.querySelectorAll(".filter-list__button").forEach(s=>{s.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,t.target.classList.add("is-active"),l=t.target.dataset.id,p(l==="all"?{params:{limit:c}}:{params:{limit:c,categoryId:l}}))},v=t=>{window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,p(l==="all"?{params:{limit:c}}:{params:{limit:c,categoryId:l}})};document.addEventListener("DOMContentLoaded",h);m.addEventListener("click",w);window.addEventListener("resize",v);
//# sourceMappingURL=index.js.map
