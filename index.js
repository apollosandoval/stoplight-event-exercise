(function() {
  'use strict';

  // YOUR CODE HERE
  let buttons = document.querySelectorAll('.button');
  let bulbs = document.querySelectorAll('.bulb');

  let toggleLight = function(event) {
    // console.log(event.target.textContent);
    switch(event.target.textContent) {
      case('Stop'):
        bulbs[0].className == 'bulb' ? bulbs[0].className='bulb stop' : bulbs[0].className='bulb';
        break;
      case('Slow'):
        bulbs[1].className == 'bulb' ? bulbs[1].className='bulb slow' : bulbs[1].className='bulb';
        break;
      case('Go'):
        bulbs[2].className == 'bulb' ? bulbs[2].className='bulb go' : bulbs[2].className='bulb';
        break;
      default:
        break;
    } // end of switch statement
  }

  let mouseEnter = function(event) {
    console.log(`Entered <${event.target.textContent}> button`);
  }

  let mouseLeave = function(event) {
    console.log(`Left <${event.target.textContent}> button`);
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggleLight);
    buttons[i].addEventListener('mouseenter', mouseEnter);
    buttons[i].addEventListener('mouseleave', mouseLeave);
  }
})();
