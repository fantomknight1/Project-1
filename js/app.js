$(document).ready(function() {
  var $char1 = $('#character1');
  $(document).on('keydown' function(e) {
    if(e.which === 39) {:
        console.log('key pressed');
        $('#character1').animate({right: "+=50px"});
        break;
    };
  })
})


// $(document).ready(function() {
//   var $char1 = $('#character1');
//   $(document).keydown( function(e) {
//     switch(e.which) {
//       case 39:
//         console.log(e);
//         $('#character1').animate({right: "+=50px"});
//         break;
//     };
//   })
// })


// $("body").keydown(function(e) {
//   if(e.keyCode == 37) { // left
//     $("#showroom").animate({
//       left: "-=980"
//     });

// $(document).on('keydown', function moveUp(event) {
//  if (87 === event.keyCode) {
//    $ship.animate({'top':'-=4px'},0.05);
//  } else if (event.keyCode === 83) {
//    $ship.animate({'top':'+=4px'},0.05);
//  }
// })