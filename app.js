const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#090909';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById('resumeModal');
    var link = document.getElementById('resumeLink');
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks the link, open the modal 
    link.onclick = function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});


document.addEventListener('mousemove', function (e) {
    const light = document.getElementById('lightEffect');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    // Set the light position to follow the mouse
    light.style.left = mouseX + 'px';
    light.style.top = mouseY + 'px';
  
    // Optionally, you can change the size based on mouse movement
    const size = Math.random() * 50 + 50; // Random size between 50px and 100px
    light.style.width = size + 'px';
    light.style.height = size + 'px';
  
    // Add a fade-out effect (optional)
    light.style.opacity = 1;
  
    // Add a fade-out effect
    setTimeout(() => {
      light.style.opacity = 0.5;
    }, 100);
  });