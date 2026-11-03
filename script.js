// EDIT THESE LINKS when your Canva, Facebook and video portfolio URLs are ready.
const PORTFOLIO_LINKS = {
  canva: '', // e.g. 'https://www.canva.com/design/.../view'
  facebook: '', // e.g. 'https://www.facebook.com/yourpage'
  video: '' // e.g. 'https://www.youtube.com/@yourchannel'
};
for (const [key, id] of Object.entries({canva:'canvaLink',facebook:'facebookLink',video:'videoLink'})) {
  const element = document.getElementById(id);
  if (PORTFOLIO_LINKS[key]) {element.href=PORTFOLIO_LINKS[key];element.target='_blank';element.rel='noopener noreferrer';}
  else {element.addEventListener('click',e=>{e.preventDefault();alert('Portfolio link coming soon. Add your '+key+' URL in script.js.');});}
}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.photo').forEach(button=>button.addEventListener('click',()=>{const img=dialog.querySelector('img');img.src=button.dataset.full;img.alt=button.querySelector('img').alt;dialog.showModal();}));document.getElementById('closeLightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});document.getElementById('year').textContent=new Date().getFullYear();
