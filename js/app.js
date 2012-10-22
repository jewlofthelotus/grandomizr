// Bind "list type" button
$('.listToggle').on('change', function(e) {
    e.preventDefault();

    if ($(this).val() == 'Textarea CSVs') {
        $('.ul').hide().removeClass('togroup');
        $('.textarea').show();
        $('textarea.textarea').addClass('togroup');
    } else {
        $('.textarea').hide().removeClass('togroup');
        $('.ul').show().addClass('togroup');
    }

    $('.groups').children().remove();
    $('.grandomizr').grandomizr();
});

$('.grandomizr').grandomizr();
