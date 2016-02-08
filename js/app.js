
var obstacles;
var $char1 = $('#character1');
var $char2 = $('#character2');

var object =
[{name: 'Jerry', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/jerry.png)', backgroundSize: 'cover'},
{name: 'Tammy', width: '13px', height: '37px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/tammy.png)', backgroundSize: 'cover'},
{name: 'Mr. Meeseeks', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/mr.meseeks.png)', backgroundSize: 'cover'},
{name: 'Mr. Meeseeks', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/mr.meseeks.png)', backgroundSize: 'cover'},
{name: 'Mr. Meeseeks', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/mr.meseeks.png)', backgroundSize: 'cover'},
{name: 'Mr. Meeseeks', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/mr.meseeks.png)', backgroundSize: 'cover'},
{name: 'Mr. Meeseeks', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/mr.meseeks.png)', backgroundSize: 'cover'},
{name: 'Telepathic Spider', width: '55px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/spider.png)', backgroundSize: 'cover'},
{name: 'Telepathic Spider', width: '55px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/spider.png)', backgroundSize: 'cover'},
{name: 'Telepathic Spider', width: '55px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/spider.png)', backgroundSize: 'cover'},
{name: 'Telepathic Spider', width: '55px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/spider.png)', backgroundSize: 'cover'},
{name: 'Counciler Rick 1', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white', backgroundSize: 'cover'},
{name: 'Counciler Rick 2', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white', backgroundSize: 'cover'},
{name: 'Counciler Rick 3', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white', backgroundSize: 'cover'},
{name: 'Counciler Rick 4', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'white', backgroundSize: 'cover'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Federation Police', width: '12px', height: '25px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Snowball', width: '15px', height: '45px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Jellybean King', width: '22px', height: '37px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/jelly.king.png)', backgroundSize: 'cover'},
{name: 'Abradolf Linkler', width: '18px', height: '50px', position: 'absolute', left: '100%', bottom: '0px', background: 'url(images/abradolf.linkler.png)', backgroundSize: 'cover'},
{name: 'Cousin Nicki', width: '10px', height: '30px', position: 'absolute', left: '100%', bottom: '0px', background: 'green', backgroundSize: 'cover'},
{name: 'Fart', width: '45px', height: '35px', position: 'absolute', left: '100%', bottom: '15px', background: 'url(images/fart2.png)', backgroundSize: 'cover'},
{name: 'Fart', width: '45px', height: '35px', position: 'absolute', left: '100%', bottom: '15px', background: 'url(images/fart2.png)', backgroundSize: 'cover'},
{name: 'Fart', width: '45px', height: '35px', position: 'absolute', left: '100%', bottom: '15px', background: 'url(images/fart2.png)', backgroundSize: 'cover'},
{name: 'Fart', width: '45px', height: '35px', position: 'absolute', left: '100%', bottom: '15px', background: 'url(images/fart2.png)', backgroundSize: 'cover'},
{name: 'Fart', width: '45px', height: '35px', position: 'absolute', left: '100%', bottom: '15px', background: 'url(images/fart2.png)', backgroundSize: 'cover'}];


function jump($el){
  $el.animate({bottom: '+=10px'}, .5);
}

function fall($el){
  $el.animate({bottom: 0});
}




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



  function Enemy (name, width, height, background, position, left, bottom, backgroundSize) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.background = background;
    this.position = position;
    this.left = left;
    this.bottom = bottom;
    this.backgroundSize = backgroundSize;
  }

  Enemy.prototype.render = function() {

    $('#upperSky').append($('<div>').addClass('enemyObject')
      .css('width', this.width)
      .css('height', this.height).css('background', this.background).css('position', this.position).css('left', this.left).css('bottom', this.bottom).css('background-size', this.backgroundSize));
  };

  var enemyArray = [];

  for (var i = 0; i < object.length; i++) {
    var r = makeRandomNum(object.length);
    var myObject = new Enemy(object[r].name, object[r].width, object[r].height, object[r].background, object[r].position, object[r].left, object[r].bottom, object[r].backgroundSize);
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

  function makeRandomNum(max) {
    return Math.floor(Math.random() * max)
  }

  function moveObjectLeft() {
    $('.enemyObject').finish().animate({left: '-=50px'})
  }

  walkInterval = setInterval(moveObjectLeft, 1000)

})




I used a number of websites while trying to figure out how to solve problems.  I don't think I really
took much but I'm including the websites here just in case.

http://jsfiddle.net/knam8/   .... I used this site to try and figure out how to detect overlapping divs.
http://www.tutorialrepublic.com/faq/move-an-element-to-left-right-up-and-down-using-arrow-keys-in-jquery.php ..... this was when I was trying to find out how to make my characters move.
http://gamequeryjs.com/documentation/first-tutorial/first-tutorial-step-2/#enemies ......... I was trying to understand objects better when dealing with a game.
http://www.w3schools.com/games/game_obstacles.asp ............ this was useful for getting an idea about how to make objects move.
http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_ani_right ............ This was useful in seeing how things animate and how to implement it.








//checkCollisions()
// collision1();
// function collision1() {
//   if ($char1.position().left < $('.enemyObject').position().left + $('.enemyObject').width && $char1.left + $char1.width > $('.enemyObject').left && $char1.bottom < $('.enemyObject').bottom + $('.enemyObject').height && $char1.bottom + $char1.height > $('.enemyObject').bottom) {
//     console.log('collision detected');
//   }
// }

// function checkCollisions() {
//  for (var i = 0; i < enemyArray.length; i++) {
//    // var enemycol = enemyArray[i];

//    if (enemyObject.x < $char1.x + $char1.width &&
//       enemyObject.x + enemyObject.width > $char1.x &&
//       enemyObject.y < $char1.y + $char1.height &&
//       enemyObject.height + enemyObject.y > $char1.y) {
//     console.log('COLLISION');
//    }
//    }
//  }




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
