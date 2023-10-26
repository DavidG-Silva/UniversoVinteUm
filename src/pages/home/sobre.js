window.onload = function() {
    var logo = document.querySelector('img[src="../image/logo.png"]');
    logo.addEventListener('mouseover', function() {
        var shaking = setInterval(function() {
            logo.style.position = 'relative';
            logo.style.left = (Math.random() * 10 - 5) + 'px';
            logo.style.top = (Math.random() * 10 - 5) + 'px';
        }, 100);
        logo.addEventListener('mouseout', function() {
            clearInterval(shaking);
            logo.style.position = '';
            logo.style.left = '';
            logo.style.top = '';
        });
    });
}