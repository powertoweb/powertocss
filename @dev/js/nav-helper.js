//Active clicked Nav
$('li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});


