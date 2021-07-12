// Mobile Menu Toggle Function
if(document.querySelectorAll('#mobile_menu_toggle_button').length > 0){
    let mobile_menu_button = document.getElementById('mobile_menu_toggle_button');

    mobile_menu_button.addEventListener('click', function (e) {
        document.getElementById('mobile-menu').classList.toggle("hidden");
        document.getElementById('menu-burger').classList.toggle("hidden");
        document.getElementById('menu-x').classList.toggle("hidden");
    })  
}

// Brand Logo Slider
if(document.querySelectorAll('.brand-slider').length > 0){
    tns({
        container: '.brand-slider',
        items: 7,
        controls: false,
        slideBy: 1, //'page',
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayDirection: 'forward',
        responsive: {
            320: { items: 3, edgePadding: 10,gutter: 10 },
            640: { edgePadding: 20, gutter: 20, items: 6 },
            900: { items: 7, edgePadding: 20, gutter: 20}
        }
    });
}

