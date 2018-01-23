// Описываем базовый класс
function Container() {
  this.id = '';
  this.className = '';
  this.htmlCode = '';
}

Container.prototype.render = function () {
  return this.htmlCode;
};

Container.prototype.remove = function(id){
  var element = document.getElementById(id);

  element.remove();
}

// Описываем класс меню
function Menu(my_id, my_class, my_items) {
  Container.call(this);

  this.id = my_id;
  this.className = my_class;
  this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
  var result = '<ul class="' + this.className + '" id="' + this.id + '">';

  for (var i = 0; i < this.items.length; i++) {
    var item = new MenuItem(this.items[i]);
    result += item.render();
  }

  result += '</ul>';
  return result;
}

// Описываем класс пунктов меню
function MenuItem(objItem){
  Container.call(this);
  this.href = objItem.href;
  this.name = objItem.name;
  this.child = objItem.child;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function () {
  return this.bildItem(this.href, this.name, this.child);
};

MenuItem.prototype.bildItem = function(href, name, child){
  var item = '';

  item += '<li>';
  item += this.bildLink(href, name);

  if (Array.isArray(child)) {
    item += this.bildSubItem(child);
  }

  item += '</li>';
  return item;
}

MenuItem.prototype.bildSubItem = function(sub_menu){
  var subItem = '';

  subItem += '<ul>';

  for (var i = 0; i < sub_menu.length; i++) {
    subItem += this.bildItem(sub_menu[i].href, sub_menu[i].name, sub_menu[i].child);
  }

  subItem += '</ul>';

  return subItem;
}

MenuItem.prototype.bildLink = function(href, name){
  return '<a href="' + href + '">' + name + '</a>';
}

function deleteMenu(e){
  e.preventDefault();

  var menu = new Menu();

  menu.remove(idMenuList);
}

function createMenu(e) {
  e.preventDefault();

  var menu = new Menu(idMenuList, classMenuList, subMenuItems);

  renderMenu = menu.render();

  document.getElementById(idMenuContainer).innerHTML = renderMenu;
}

var subMenuItems = [
  {
    href: '/',
    name: 'Главная',
    child: false,
  },
  {
    href: '/catalogue/',
    name: 'Каталог',
    child: [
      {
        href: '/catalogue/tovar/',
        name: 'Одежда',
        child: [
          {
            href: '/catalogue/tovar/children/',
            name: 'Для детей',
          },
          {
            href: '/catalogue/tovar/man/',
            name: 'Для мужчин',
            child: false,
          },
          {
            href: '/catalogue/tovar/woman/',
            name: 'Для женщин',
            child: false,
          },
        ],
      },    
    ],
  },
  {
    href: '/contacts/',
    name: 'Контакты',
    child: false,
  }
];
var idMenuContainer = 'menu';
var idMenuList = 'menu_list';
var classMenuList = 'menu_list';

window.onload = function () {

  document.getElementById('delete_menu').addEventListener('click', deleteMenu);
  document.getElementById('create_menu').addEventListener('click', createMenu);

};