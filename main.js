$(document).ready(main);
function main() {
    $('.bt-menu').click(function(e) {
        e.preventDefault();
        $('.container').animate({
            padding: '0px 0px 0px 90px'
        });

        $('nav#buscame').animate({
            left: "0%"
        });
    });

    $('.bt-menucross').click(function(e) {
        e.preventDefault();
        $('.container').animate({
            padding: '0px 0px 0px 20px'
        });

        $('nav#buscame').animate({
            left: "-100%"
        });
    });
}
