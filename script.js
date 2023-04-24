function changeMenu(val) {
    switch (val) {
        case 1:
            document.getElementById('drinks-menu-btn').classList.remove('active')
            document.getElementById('takeaway-menu-btn').classList.remove('active')
            document.getElementById('food-menu-btn').classList.add('active')
            document.getElementById('menu-img').src = "assets/food_menu.png"
            break
        case 2:
            document.getElementById('food-menu-btn').classList.remove('active')
            document.getElementById('takeaway-menu-btn').classList.remove('active')
            document.getElementById('drinks-menu-btn').classList.add('active')
            document.getElementById('menu-img').src = "assets/drinks_menu.png"
            break   
        case 3:
            document.getElementById('drinks-menu-btn').classList.remove('active')
            document.getElementById('food-menu-btn').classList.remove('active')
            document.getElementById('takeaway-menu-btn').classList.add('active')
            document.getElementById('menu-img').src = "assets/takeaway_menu.png"
            break 
    }
}