/* empty css              */(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r=!1,n="http://localhost:3000/fantasticArticles",o="./data/fantasticArticles.json";async function d(){var i;try{const l=await fetch(r?n:o);if(!l.ok)throw new Error("Failed to load fantastic articles");const s=await l.json();(Array.isArray(s)?((i=s[0])==null?void 0:i.fantasticArticles)??s:s.fantasticArticles??s).forEach(e=>{const t=`
<div
  class="w-full h-full py-3 px-2 bg-white fantastic-articles-shadow flex flex-col items-center justify-center">
  <div class="w-full mb-1  flex items-center justify-start">
    <img src="public/svg/fantastic-articles-header.svg" alt="شگفت انگیزهای امروز">
  </div>
  <div class="w-full flex flex-col">
    <div class="w-full mb-1 relative flex items-center justify-center">
      <img class="w-[240px] h-[240px]" src="${e.image}" alt="">
      <div class="p-1 absolute top-0 left-0 flex flex-col gap-2">
        <div class="w-[8px] h-[8px] rounded-full bg-[rgb(33,33,33)]"></div>
        <div class="w-[8px] h-[8px] rounded-full bg-[rgb(33,33,33)]"></div>
        <div class="w-[8px] h-[8px] rounded-full bg-[rgb(33,33,33)]"></div>
      </div>
    </div>
    <div
      class="w-full flex flex-col items-center justify-center [&>*>span]:font-sans [&>*>span]:font-bold">
      <div
        class="w-full font-iranYekanBold text-[11px] leading-[23.87px] text-neutral-700 line-clamp-2 overflow-hidden">${e.title}</div>
      <div class="w-full mb-1 flex flex-row items-center justify-end">
        <div class="flex flex-row items-center justify-center">
          <div class="font-iranYekanBold text-[11px] leading-[23.87px] text-neutral-700">${e.score}</div>
          <div class="mr-2"><svg style="width: 16px; height: 16px; fill: rgb(249, 188, 0);"
              viewBox="0 0 18 18">
              <path transform="scale(0.75) translate(-1,0)"
                d="M11.98 2.1a.455.455 0 00-.414.315L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014-2.144-6.635a.455.455 0 00-.451-.315z">
              </path>
            </svg></div>
        </div>
      </div>
      <div class="w-full pt-1 flex flex-col">
        <div class="w-full flex flex-row items-center">
          <div
            class="w-[38px] h-[20px] px-1 rounded-[16px] bg-[rgb(211,47,47)] font-iranYekanBold text-[11px] leading-[23.87px] text-white flex items-center justify-center">
            ${e.offPercent}٪
          </div>
          <div class="w-full flex flex-row items-center justify-end gap-1">
            <div
              class="font-iranYekanBold text-[14px] lg:text-[16px] leading-[29.4px] text-[rgb(63,64,100)] [&>span]:font-sans [&>span]:font-bold">
              ${e.offerPrice}
            </div>
            <svg style="
                                  width: 16px;
                                  height: 16px;
                                  fill: rgb(66, 71, 80);
                                " viewBox="0 0 16 18">
              <path fill-rule="evenodd" transform="scale(1.25) translate(0,0)"
                d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022..06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="pl-5 flex items-center justify-end">
          <del
            class="font-iranYekan text-[11px] text-[rgb(192,194,197)] leading-[23.87px]">${e.realPrice}</del>
        </div>
      </div>
      <div class="w-full mt-1 flex flex-col ">
        <div class="pt-1 flex flex-row items-center justify-end">
          <div
            class="font-iranYekanBold text-[10px] text-[rgb(239,57,78)] [&>span]:font-sans [&>*>span]:font-black">
            ۳۵ <span>:</span> ۰۶ <span>:</span> ۲۴</div>
        </div>
      </div>
    </div>
  </div>
</div>
      `;document.querySelector("#fantastic-articles").insertAdjacentHTML("beforeend",t)})}catch(l){console.log(l)}}d();
