var defaultHeaderColor = '#7A4419';
var defaultBodyColor = '#D7BE82';
var rainingStars = false;

const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();

currentYearElement.innerHTML = `&copy;${currentYear}`;


        function changeHeaderColor() {
            var header = document.querySelector('header');
            header.style.backgroundColor = getRandomColor();
        }

        function resetHeaderColor() {
            var header = document.querySelector('header');
            header.style.backgroundColor = defaultHeaderColor;
            var body = document.querySelector('body');
            body.style.backgroundColor = defaultBodyColor
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function colorExplosion() {
            var body = document.querySelector('body');
            var explosionColor = getRandomColor();
            body.style.backgroundColor = explosionColor;
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
            for (var i = 0; i < 75; i++) {
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