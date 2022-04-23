const link = document.querySelector('.contacts-btn');
const popup = document.querySelector('.modal');
const close = document.querySelector('.btn-close');
const form = popup.querySelector('form');
const username = popup.querySelector('[name=username]');
const email = popup.querySelector('[name=email]'); //ищем по попапу, а не в документе, т.к. так производительнее
const text = popup.querySelector('[name=text]');
const storage = localStorage.getItem('username');


// вместо evt может быть и другое название

link.addEventListener('click', function(evt) {
  evt.preventDefault(); //отменяем действия браузера по умолчанию, в частности для ссылки
  popup.classList.add('modal-show');

  if (storage) {
    username.value = storage;
    email.focus(); //при открытии модального окна фокус будет в этом поле
  } else {
      username.focus();
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');//нужно удалить класс, чтобы при следующем открытии модального окна, он не сработал
});

//подписку на событие оформляем не у кнопки отправки, а у формы
//проверка на заполненность обязательных полей ввода

form.addEventListener('submit', function(evt) {
  if(!email.value || !text.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  } else {
      localStorage.setItem('username', username.value);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
})
