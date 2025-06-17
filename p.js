// document.getElementById('darkToggle').addEventListener('click', function() {
//     document.body.classList.toggle('dark');
// });

$('#darkToggle').on('click', function(){
$('body').toggleClass('dark');
$(this).text($('body').hasClass('dark') ? '🌙' : '🌞');
});
  
const btn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){  // 여기 대문자 Y
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});