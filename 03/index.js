$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div',head);
$('footer').load('./inc.html footer>div');

let idx = localStorage.idx || 0 ;

function head(){

    $('head01 a').eq(idx).css('color','red');
    $('head01 a').click(function(){
        let idx = $(this).index();
        localStorage.idx = idx;

    })
}
