// slider
let shownPhotoAndTestimonial = 0;

$('.nv').on('click', function () {
    shownPhotoAndTestimonial = $( this ).index() - 1;
    changePhotoAndText();
});

$('#left').on('click', function () {
    shownPhotoAndTestimonial !== 0 ? --shownPhotoAndTestimonial : shownPhotoAndTestimonial = 3;
    changePhotoAndText()
});

$('#right').on('click', function () {
    shownPhotoAndTestimonial !== 3 ? ++shownPhotoAndTestimonial : shownPhotoAndTestimonial = 0;
    changePhotoAndText()
});

function changePhotoAndText() {
    switch (shownPhotoAndTestimonial) {
        case 0:
            $('.selfie-main').addClass('dn').eq(0).removeClass('dn');
            $('.testimonials__description').addClass('dn').eq(0).removeClass('dn');
            break;
        case 1:
            $('.selfie-main').addClass('dn').eq(1).removeClass('dn');
            $('.testimonials__description').addClass('dn').eq(1).removeClass('dn');
            break;
        case 2:
            $('.selfie-main').addClass('dn').eq(2).removeClass('dn');
            $('.testimonials__description').addClass('dn').eq(2).removeClass('dn');
            break;
        case 3:
            $('.selfie-main').addClass('dn').eq(3).removeClass('dn');
            $('.testimonials__description').addClass('dn').eq(3).removeClass('dn');
            break;
        default:
            $('.selfie-main').addClass('dn').eq(0).removeClass('dn');
            $('.testimonials__description').addClass('dn').eq(0).removeClass('dn');
    }
}
