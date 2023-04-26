// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

class Store {
  constructor(product, category, price) {
    this.product = product;
    this.category = category;
    this.price = price;
  }
}

const products = [
  new Store('Оперативная память 4 ГБ', 'Оперативная память', 100),
  new Store('Оперативная память 8 ГБ', 'Оперативная память', 200),
  new Store('Оперативная память 16 ГБ', 'Оперативная память', 400),
  new Store('Intel Core i3', 'Процессор', 150),
  new Store('Intel Core i5', 'Процессор', 250),
  new Store('Intel Core i7', 'Процессор', 350),
  new Store('AMD Radeon RX 560', 'Видеокарта', 300),
  new Store('Nvidia GeForce GTX 1650', 'Видеокарта', 400),
  new Store('Nvidia GeForce GTX 1660', 'Видеокарта', 500),
  new Store('ASUS Prime B450M-A', 'Материнская карта', 100),
  new Store('GIGABYTE GA-AB350M-Gaming 3', 'Материнская карта', 120),
  new Store('MSI B450 TOMAHAWK MAX', 'Материнская карта', 150),
  new Store('Corsair Vengeance LPX 4 ГБ', 'Оперативная память', 100),
  new Store('Corsair Vengeance LPX 8 ГБ', 'Оперативная память', 200),
  new Store('Corsair Vengeance LPX 16 ГБ', 'Оперативная память', 400),
  new Store('AMD Ryzen 3 3200G', 'Процессор', 150),
  new Store('AMD Ryzen 5 3600', 'Процессор', 250),
  new Store('AMD Ryzen 7 3700X', 'Процессор', 350),
  new Store('Gigabyte GeForce GTX 1050 Ti', 'Видеокарта', 300),
  new Store('ASUS Dual GeForce GTX 1660 Super', 'Видеокарта', 500)
];


// // Используем метод filter() для создания массива элементов с категорией "процессоры"
// const processors = products.filter(item => item.category === 'Процессор');

// // Используем метод forEach() для вывода каждого элемента на консоль
// processors.forEach(item => console.log(item));

// Создаем класс Cart для управления корзиной
class Cart {
  constructor() {
    this.items = []; // Массив товаров в корзине
    this.res = 'хйу';
    this.h3 = document.createElement('h3');
    this.basket = document.getElementById('test');
  }


  // Добавление товара в корзину
  addProduct(product) {
    this.items.push(product);
  }

  // Удаление товара из корзины
  removeProduct(product) {
    const index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Получение суммарной стоимости товаров в корзине
  getTotalPrice() {
    const totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    this.res = `Корзина: ${totalPrice} рублей`;
    //Добавляем корзину на страницу
    this.h3.textContent = this.res;
    this.basket.appendChild(this.h3);
  }
  // Отображаем все товары в контейнере
  getDisplayProd() {
    const container = document.getElementById('container');
    for (let i = 0; i < products.length; i++) {
      const div = document.createElement('div');
      div.className = 'product';
      const h2 = document.createElement('h2');
      const a = document.createElement('a');
      h2.textContent = products[i].product + ' ' + products[i].price + '$';
      a.textContent = 'Добавить в корзину';
      a.href = '#';
      a.addEventListener('click', (e) => {
        this.addProduct(products[i]);
        this.getTotalPrice();
        e.preventDefault();
      })
      div.appendChild(h2);
      div.appendChild(a);
      container.appendChild(div);
    }
  }
}






// Создаем экземпляр корзины
const cart = new Cart();
// // Добавляем товары в корзину
cart.addProduct(products[0]);
cart.addProduct(products[2]);
cart.getTotalPrice();
cart.getDisplayProd();
// cart.getTotalPrice(basket);
// cart.addProduct(products[4]);
// cart.addProduct(products[7]);

// // Удаляем товар из корзины
// cart.removeProduct(products[2]);












