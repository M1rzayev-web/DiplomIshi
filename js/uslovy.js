const CallDiv=document.querySelector(".call_in-div")
const hideCall=document.querySelector(".h-div-Call")
CallDiv.addEventListener("click", hideCallDiv);
hideCall.addEventListener("click", hideCallDiv)
function showCallDiv(){
CallDiv.style.display="block"
CallDiv.style.display="flex"
}
function hideCallDiv(){
    CallDiv.style.display="none"
}

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem('scrollTop', scrollTop);
  });
  
  // Saytga qayta kirishda olish
  window.addEventListener('load', function() {
    var storedScrollTop = localStorage.getItem('scrollTop');
    if (storedScrollTop !== null) {
      window.scrollTo({
        top: storedScrollTop,
        behavior: 'smooth'
      });
      localStorage.removeItem('scrollTop');
    }
  });