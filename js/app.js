function jump($el){
  $el.animate({bottom: '+=10px'}, .5);
}

function fall($el){
  $el.animate({bottom: 0});
}

var obstacles;
var $char1 = $('#character1');
var $char2 = $('#character2');

var object = 
[{name: 'Jerry', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Tammy', width: '9px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'yellow'},
{name: 'Mr. Meeseeks', width: '10px', height: '35px', position: 'absolute', left: '100%', bottom: '0px', background: 'blue'},
{name: 'Mr. Meeseeks', width: '10px', height: '35px', position: 'absolute', left: '100%', bottom: '0px', background: 'blue'},
{name: 'Mr. Meeseeks', width: '10px', height: '35px', position: 'absolute', left: '100%', bottom: '0px', background: 'blue'},
{name: 'Mr. Meeseeks', width: '10px', height: '35px', position: 'absolute', left: '100%', bottom: '0px', background: 'blue'},
{name: 'Mr. Meeseeks', width: '10px', height: '35px', position: 'absolute', left: '100%', bottom: '0px', background: 'blue'},
{name: 'Telepathic Spider', width: '40px', height: '15px', position: 'absolute', left: '100%', bottom: '0px', background: 'black'},
{name: 'Telepathic Spider', width: '40px', height: '15px', position: 'absolute', left: '100%', bottom: '0px', background: 'black'},
{name: 'Telepathic Spider', width: '40px', height: '15px', position: 'absolute', left: '100%', bottom: '0px', background: 'black'},
{name: 'Telepathic Spider', width: '40px', height: '15px', position: 'absolute', left: '100%', bottom: '0px', background: 'black'},
{name: 'Counciler Rick 1', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white'},
{name: 'Counciler Rick 2', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white'},
{name: 'Counciler Rick 3', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white'},
{name: 'Counciler Rick 4', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Snowball', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Jellybean King', width: '15px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Abradolf Linkler', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Cousin Nicki', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Fart', width: '15px', height: '15px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Fart', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Fart', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'},
{name: 'Fart', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'}, 
{name: 'Fart', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green'}];











keys = [false, false, false, false, false, false];



$(document).ready(function(){
  console.log('hi')
  obstacles
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



  function Enemy (name, width, height, background, position, left, bottom, move) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.background = background;
    this.position = position;
    this.left = left;
    this.bottom = bottom;
    this.move = move;
  }

  Enemy.prototype.render = function() {

    $('#upperSky').append($('<div>').addClass('enemyObject')
      .css('width', this.width)
      .css('height', this.height).css('background', this.background).css('position', this.position).css('left', this.left).css('bottom', this.bottom));
  };

  var enemyArray = [];

  for (var i = 0; i < object.length; i++) {
    var r = makeRandomNum(object.length);
    var myObject = new Enemy(object[r].name, object[r].width, object[r].height, object[r].background, object[r].position, object[r].left, object[r].bottom);
    enemyArray.push(myObject);
  };
  var intervalId;
  var paintEnemies = function(){
    if(!enemyArray.length) {
      clearInterval(intervalId)
    }

    enemyArray.pop().render();
  };
  intervalId = setInterval(paintEnemies, 2000)
  walkInterval = setInterval(moveObjectLeft, 1000)

  function makeRandomNum(max) {
    return Math.floor(Math.random() * max)
  }

  function moveObjectLeft() {
    $('.enemyObject').finish().animate({left: '-=50px'})
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