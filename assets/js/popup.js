const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');

show1 = function () {
    popup1.style.display = 'block';
}

hide1 = function () {
    popup1.style.display = 'none';
}

show2 = function () {
    popup2.style.display = 'block';
}

hide2 = function () {
    popup2.style.display = 'none';
}

window.addEventListener('keyup', function(event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      popup1.style.display = 'none';
      popup2.style.display = 'none';
    }
  });


