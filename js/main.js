//nav
const openNavbar = function() {
    $('#btnMenu').fadeOut(200); 
    $('#nav').show(400, function() {
        $('.nav-link').fadeIn(300); 
    });
};
const closeNavbar = function() {
    $('.nav-link').fadeOut(300, function() {
        $('#nav').hide(400);
        $('#btnMenu').fadeIn(400); 
    });
};

$('#btnMenu').click(function() {
    if ($('#nav').is(':visible')) {
        closeNavbar();
    } else {
        openNavbar();
    }
    return false; 
});


$('#btnCloseMenu').click(function()  {
    closeNavbar(); 
    return false;
});


// singer
$('#sliderDown .singer-head').click(function()  {
    $('.singer-content').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});

//countdown
window.onload= function() {
    updateCountdown("december 12 2024 ");
   
};
const updateCountdown = (dateCountTo) => {
    let countDownDate = new Date(dateCountTo).getTime();
    let nowDate = new Date().getTime();
    let timeDifference = countDownDate - nowDate;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    $('.countDown .days').text(days);
    $('.countDown .hours').text(hours);
    $('.countDown .minutes').text(minutes);
    $('.countDown .seconds').text(seconds);

    setInterval(function() {  updateCountdown(dateCountTo); }, 1000);
}

// contact 
const maxLength = 100;
$('#formMsg').keyup(function() {
    let length = $(this).val().length;
    let amountLeft = maxLength - length;
    if(amountLeft<=0)
           {
                $("#chars").text("your available character finished");
            
           }
       else{
    
       $("#chars").text(amountLeft);
       }
     
});

