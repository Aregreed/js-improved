
function catal_menu() {
    document.getElementById("catal_menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.catal_menu_button')) {

    var catal_menu_items = document.getElementsByClassName("catalog_menu_item");
    var i;
    for (i = 0; i < catal_menu_items.length; i++) {
      var openCatalog_menu = catal_menu_items[i];
      if (openCatalog_menu.classList.contains('show')) {
        openCatalog_menu.classList.remove('show');
      }
    }
  }
}
