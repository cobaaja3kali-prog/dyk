
function $(sel){return document.querySelector(sel)}
function showToast(msg, duration=3000){
  let t = document.createElement('div'); t.className='toast'; t.textContent = msg; document.body.appendChild(t);
  setTimeout(()=> t.classList.add('show'), 10);
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),300); }, duration);
}
function toggleNav(){
  const nav = document.getElementById('navSide');
  nav.style.right = nav.style.right === '0px' ? '-280px' : '0px';
}
document.addEventListener('click', (e)=>{
  const nav = document.getElementById('navSide');
  const btn = document.getElementById('menuBtn');
  if(!nav) return;
  if(!nav.contains(e.target) && !btn.contains(e.target)){
    nav.style.right = '-280px';
  }
});
