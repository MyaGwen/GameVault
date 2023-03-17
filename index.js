let menu = document.getElementById('menu');
let bar1 = document.getElementsByClassName('bar')[0];
let bar2 = document.getElementsByClassName('bar')[1];
let bar3 = document.getElementsByClassName('bar')[2];
let navList = document.getElementById('main-nav-ul');
// navList.style.display = 'none';

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

// retrieve DOM elements
const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar input');
const games = document.querySelectorAll('.trending-item');
const news = document.querySelectorAll('.news-item');
const star = document.querySelector('.img-label span');

// add event listener to search form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  // filter games
  games.forEach(game => {
    const title = game.querySelector('h2').textContent.trim().toLowerCase();
    if (title.includes(query)) {
      game.style.display = 'block';
     
      star.style.display = 'none';
    
    } else {
      game.style.display = 'none';
    }
  });

  // filter news
  news.forEach(newsItem => {
    const title = newsItem.querySelector('.news-title').textContent.trim().toLowerCase();
    if (title.includes(query)) {
      newsItem.style.display = 'block';
    } else {
      newsItem.style.display = 'none';
    }
  });
});