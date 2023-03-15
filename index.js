let menu = document.getElementById('menu');
let bar1 = document.getElementsByClassName('bar')[0];
let bar2 = document.getElementsByClassName('bar')[1];
let bar3 = document.getElementsByClassName('bar')[2];
let navList = document.getElementById('main-nav-ul');

let isClicked = false;

menu.addEventListener('click', function () {
    if (isClicked) {
        // Reset styles to normal state
        bar1.style.top = '';
        bar1.style.transform = '';
        bar2.style.opacity = '';
        bar3.style.top = '';
        bar3.style.transform = '';
        navList.style.display = 'none';
    } else {
        // Apply styles for clicked state
        bar1.style.top = '5px';
        bar1.style.transform = 'rotate(45deg)';
        bar2.style.opacity = '0';
        bar3.style.top = '5px';
        bar3.style.transform = 'rotate(-45deg)';
        navList.style.display = 'block';
    }

    // Toggle isClicked
    isClicked = !isClicked;
});
