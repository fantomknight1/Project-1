function jump($el){
  $el.animate({bottom: '+=10px'}, .5);
}

function fall($el){
  $el.animate({bottom: 0});
}

var obstacles;
var $char1 = $('#character1');
var $char2 = $('#character2');



obstacles








keys = [false, false, false, false, false, false];



$(document).ready(function(){
  console.log('hi')

  // obstacles = new component(10, 200, "green", 300, 120);

  $(document).on('keydown', function(ex){
    switch(ex.keyCode) {
      case 38:
        keys[1] = true; //LEFT
        break;
      case 37:
        keys[0] = true; //UP
        break;
      case 39:
        keys[2] = true; //RIGHT
        break;
      case 65:
        keys[3] = true;
        break;
      case 87:
        keys[4] = true;
        break;
      case 68:
        keys[5] = true;
        break;
    }
  })

  $(document).on('keyup', function(ex){
    switch(ex.keyCode) {
      case 38:
        keys[1] = false;
        console.log('bottom');
        $char1.finish().animate({bottom: '0px'});
        break;
      case 37:
        keys[0] = false;
        break;
      case 39:
        keys[2] = false;
        break;
      case 65:
        keys[3] = false;
        break;
      case 87:
        keys[4] = false;
        console.log('2bottom');
        $char2.finish().animate({bottom: '0px'});
        break;
      case 68:
        keys[5] = false;
        break;
    }

  })

// //     .on('keyup', function(e) {
// //        switch(e.which){
// //         case 38:
// //           console.log('let go of up key');
// //           fall($char1)
// //         break;
// //        }
// //     })
//  });

  function checkKeys(e) {
  if(keys[1] || keys[0] || keys[2] || keys[3] || keys[4] || keys[5]) {
              
        if (keys[2]) {
          console.log('right')
          $char1.finish().animate({left: '+=5px'});
        }

        if (keys[0]) {
          console.log('left');
          $char1.finish().animate({left: '-=5px'});
        }
        if (keys[1]) {
          console.log('up');
          jump($char1);
        }
        if (keys[3]) {
          console.log('2left')
          $char2.finish().animate({left: '-=5px'})
        }
        if (keys[4]) {
          console.log('2up')
          jump($char2);
        }
        if (keys[5]) {
          console.log('2right')
          $char2.finish().animate({left: '+=5px'})
        }
    }
  }

  window.setInterval(checkKeys, 1000 / 60);
  if ($char1.bottom > '150px') {
    $char1.bottom = '150px';
  }
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