$(document).ready(function() {
    $('#section-2').hide();
    $('#section-3').hide();
    $('#section-4').hide();
    $('#section-5').hide();
});

$('#next-to-2').click(function() {
    $('#section-1').hide();
    $('#section-2').show();
});

$('#next-to-3').click(function() {
    $('#section-2').hide();
    $('#section-3').show();
});

$('#next-to-4').click(function() {
    $('#section-3').hide();
    $('#section-4').show();
});

$('#next-to-5').click(function() {
    $('#section-4').hide();
    $('#section-5').show();
});

$('#back-to-1').click(function() {
    $('#section-2').hide();
    $('#section-1').show();
});

$('#back-to-2').click(function() {
    $('#section-3').hide();
    $('#section-2').show();
});

$('#back-to-3').click(function() {
    $('#section-4').hide();
    $('#section-3').show();
});

$('#back-to-4').click(function() {
    $('#section-5').hide();
    $('#section-4').show();
});
