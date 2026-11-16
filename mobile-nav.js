const menuButton = document.querySelector('.mobile-menu-btn');
const navigation = document.getElementById('primary-navigation');

if (menuButton && navigation) {
    document.documentElement.classList.add('js-mobile-menu');

    function setMenuOpen(isOpen) {
        navigation.classList.toggle('active', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));

        if (!isOpen) {
            navigation.querySelectorAll('details[open]').forEach(function (dropdown) {
                dropdown.open = false;
            });
        }
    }

    menuButton.addEventListener('click', function () {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuButton.focus();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            setMenuOpen(false);
        }
    });
}