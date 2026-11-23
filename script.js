document.getElementById('year').textContent=new Date().getFullYear();const bs=[...document.querySelectorAll('.filter')],cs=[...document.querySelectorAll('.project')];bs.forEach(b=>b.addEventListener('click',()=>{bs.forEach(x=>x.classList.toggle('active',x===b));cs.forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.cat!==b.dataset.filter)}));
// Reveal sections and cards as they enter the viewport.
const animatedItems=document.querySelectorAll('section .heading,section .panel,section .project,section .service,section .contact');
animatedItems.forEach(item=>item.classList.add('reveal'));
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const revealObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});
 animatedItems.forEach(item=>revealObserver.observe(item));
}else{animatedItems.forEach(item=>item.classList.add('is-visible'))}

