// Image paths work whether your photos are in the repository root or in /assets/.
const photoCandidates = name => [name, `assets/${name}`, `assets/images/${name}`];
function loadWithFallback(img, name, onSuccess) {
  const choices=photoCandidates(name); let i=0;
  function next(){if(i>=choices.length){img.style.opacity='0';return;}const path=choices[i++];const test=new Image();test.onload=()=>{img.src=path;img.style.opacity='1';onSuccess?.(path);};test.onerror=next;test.src=path;}next();
}
document.querySelectorAll('[data-photo]').forEach(img=>loadWithFallback(img,img.dataset.photo));
const hero=document.querySelector('.hero-photo');
const heroTest=new Image();loadWithFallback(heroTest,'DSC02128.JPG',path=>hero.style.backgroundImage=`url("${path}")`);
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.shot').forEach(btn=>btn.addEventListener('click',()=>{const source=btn.querySelector('img').src;if(!source)return;dialog.querySelector('img').src=source;dialog.showModal();}));document.getElementById('close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});document.getElementById('year').textContent=new Date().getFullYear();
