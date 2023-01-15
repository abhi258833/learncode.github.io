$('#menu-btn').click(function () {
  $('nav .navigation ul').addClass('active');
});

$('#menu-close').click(function () {
  $('nav .navigation ul').removeClass('active');
});

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});




var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
x.style.left='-400px';
y.style.left='50px';
z.style.left='110px';
}
function login()
{
x.style.left='50px';
y.style.left='450px';
z.style.left='0px';
}


var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}