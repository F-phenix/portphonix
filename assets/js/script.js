document.getElementById('menu-icon').addEventListener('click', function() {
    var headerRight = document.getElementById('header-right');
    if (headerRight.classList.contains('show')) {
        headerRight.classList.remove('show');
    } else {
        headerRight.classList.add('show');
    }
});
