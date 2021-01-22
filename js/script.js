// Our Services description
$('.list__item').on( 'click', function() {
    $('.list__item').removeClass('selected');
    $('.description__item').addClass('dn').eq( $(this).index() ).removeClass('dn');
    $(this).addClass('selected');
} );

// Our Amazing Work photo switch
$('.examples__item').on( 'click', function() {
    $('.examples__item').removeClass('selected-introduction');
    $(this).addClass('selected-introduction');

    switch ($(this).index()) {
        case 0:
            $('.images__item').removeClass('dn');
            $('#load-more').removeClass('dn');
            $('.images__item.landing-pages').addClass('dn');
            $('.images__item.wordpress').addClass('dn');
            break;
        case 1:
            $('.images__item').addClass('dn');
            $('.images__item.graphic-design').removeClass('dn');
            $('#load-more').addClass('dn');
            break;
        case 2:
            $('.images__item').addClass('dn');
            $('.images__item.web-design').removeClass('dn');
            $('#load-more').addClass('dn');
            break;
        case 3:
            $('.images__item').addClass('dn');
            $('.images__item.landing-pages').removeClass('dn');
            $('#load-more').addClass('dn');
            break;
        case 4:
            $('.images__item').addClass('dn');
            $('.images__item.wordpress').removeClass('dn');
            $('#load-more').addClass('dn');
            break;
        default:
            $('.images__item').removeClass('dn');
            $('#load-more').removeClass('dn');
            $('.images__item.landing-pages').addClass('dn');
            $('.images__item.wordpress').addClass('dn');
    }
} );

// Load more button
$('#load-more').on('click', function() {
    $(this).addClass('dn');
    $('.loader').removeClass('dn');

    setTimeout(function() {
        $('.loader').addClass('dn');
        $('.images__item').removeClass('dn');
    }, 2000);
} );

