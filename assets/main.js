'use strict';
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
function closeMenu(){ nav?.classList.remove('open'); menuButton?.setAttribute('aria-expanded','false'); }
menuButton?.addEventListener('click', () => { const open=menuButton.getAttribute('aria-expanded')!=='true'; menuButton.setAttribute('aria-expanded',String(open)); nav.classList.toggle('open',open); });
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const descriptions={all:'',forschung:'Theater als Labor: Lebenswelten spielerisch erforschen, Fragen stellen und neue Perspektiven entdecken.',schulhaus:'Konzepterarbeitung, Inputworkshops, Begleitung und Inszenierung. Gemeinsam verwandeln wir Schulhäuser in lebendige Spielräume.',buehne:'Gemeinsame Stückentwicklung und Inszenierung mit Schulklassen, Spielclubs und Theatergruppen.'};
const filters=document.querySelectorAll('[data-filter]');
const cards=document.querySelectorAll('[data-category]');
filters.forEach(button=>button.addEventListener('click',()=>{const chosen=button.dataset.filter; filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button))); let count=0; cards.forEach(card=>{card.hidden=chosen!=='all'&&card.dataset.category!==chosen;if(!card.hidden)count++;});document.querySelector('.project-grid')?.classList.toggle('filtered',chosen!=='all');const desc=document.querySelector('.filter-description');if(desc)desc.textContent=descriptions[chosen];const status=document.querySelector('#filter-status');if(status)status.textContent=`${count} Projekte angezeigt`; }));
const galleryButtons=[...document.querySelectorAll('[data-gallery]')];
if(galleryButtons.length){
 const dialog=document.createElement('dialog');dialog.className='lightbox';dialog.setAttribute('aria-label','Projektbilder');
 dialog.innerHTML='<div class="lightbox-layout"><div class="lightbox-top"><span>Bildergalerie</span><button type="button" class="close-lightbox" aria-label="Bildergalerie schliessen">Schliessen ×</button></div><img alt=""><div class="lightbox-bottom"><button type="button" class="previous" aria-label="Vorheriges Bild">←</button><span class="lightbox-caption" aria-live="polite"></span><button type="button" class="next" aria-label="Nächstes Bild">→</button></div></div>';
 document.body.append(dialog);let current=0;let trigger=null;
 const render=()=>{const img=galleryButtons[current].querySelector('img');const target=dialog.querySelector('img');target.src=galleryButtons[current].dataset.full||img.src;target.alt=img.alt;dialog.querySelector('.lightbox-caption').textContent=`${current+1} / ${galleryButtons.length} · ${img.alt}`;};
 const move=delta=>{current=(current+delta+galleryButtons.length)%galleryButtons.length;render();};
 galleryButtons.forEach((button,i)=>button.addEventListener('click',()=>{current=i;trigger=button;render();dialog.showModal();document.body.classList.add('locked');}));
 dialog.querySelector('.close-lightbox').addEventListener('click',()=>dialog.close());dialog.querySelector('.previous').addEventListener('click',()=>move(-1));dialog.querySelector('.next').addEventListener('click',()=>move(1));
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}if(e.key==='ArrowRight'){e.preventDefault();move(1);}});
 dialog.addEventListener('close',()=>{document.body.classList.remove('locked');trigger?.focus();});
}
