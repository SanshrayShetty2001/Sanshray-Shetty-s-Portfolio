const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.section-label,.about-grid,.work-heading,.project,.steps,.contact-inner').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
const glow=document.querySelector('.cursor-glow');
if(matchMedia('(pointer:fine)').matches){document.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='.8';});document.addEventListener('pointerleave',()=>glow.style.opacity='0');}
// Replace this address with your public contact email before publishing.
const CONTACT_EMAIL='';
if(CONTACT_EMAIL){const link=document.getElementById('email-link');link.href=`mailto:${CONTACT_EMAIL}`;link.querySelector('span').textContent='↗';document.querySelectorAll('a[href="mailto:hello@example.com"]').forEach(a=>a.href=`mailto:${CONTACT_EMAIL}`);}
