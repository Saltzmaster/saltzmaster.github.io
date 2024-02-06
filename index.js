var rainingStars = false;

const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();

currentYearElement.innerHTML = `&copy;${currentYear}`;

const backgroundImages = [
    'url("img/starryNight.jpg")',
    'url("img/starryNight2.jpg")',
    'url("img/starryNight3.webp")',
    'url("img/starryNight4.webp")',
    'url("img/starryNight5.webp")',
  ];

  function colorExplosion() {
    var body = document.querySelector('body');
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var explosionImage = backgroundImages[randomIndex];
    body.style.backgroundImage = explosionImage;
  }
  
        function toggleTwinklingStars() {
            event.stopPropagation();
            var section = document.querySelector('section');
            var isTwinkling = section.classList.toggle('twinkling');
        
            if (isTwinkling) {
                startTwinklingStars(section);
            } else {
                stopTwinklingStars(section);
            }
        }
        
        function startTwinklingStars(section) {
            for (var i = 0; i < 115; i++) {
                createStar(section);
            }
        }
        
        function stopTwinklingStars(section) {
            var stars = section.getElementsByClassName('star');
            while (stars.length > 0) {
                stars[0].parentNode.removeChild(stars[0]);
            }
        }
        
        function createStar(section) {
            var star = document.createElement('div');
            star.className = 'star';
            var maxX = section.offsetWidth;
            var maxY = section.offsetHeight;
            var randomX = Math.random() * maxX;
            var randomY = Math.random() * maxY;
            star.style.left = randomX + 'px';
            star.style.top = randomY + 'px';
            section.appendChild(star);
        }        

        document.addEventListener('DOMContentLoaded', function () {
            const header = document.querySelector('header');
            const hintElement = document.createElement('h6');
            hintElement.textContent = 'Try clicking';
            hintElement.className = 'hint';
            document.body.appendChild(hintElement);

            hintElement.addEventListener('click', function () {
                moveHint();
            });

            function moveHint() {
                const headerWidth = header.offsetWidth;
                const headerHeight = header.offsetHeight;

                const newLeft = Math.random() * (headerWidth - hintElement.offsetWidth);
                const newTop = Math.random() * (headerHeight - hintElement.offsetHeight);

                hintElement.style.left = newLeft + 'px';
                hintElement.style.top = newTop + 'px';
            }

            moveHint();
        });