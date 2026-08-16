
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav-links');
 if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('form[data-formsubmit]').forEach(form=>{
   const next=form.querySelector('input[name="_next"]');
   if(next) next.value=window.location.origin + '/thank-you';
 });
});
