const modal = document.getElementById('modal');
const btn = document.getElementById('btn__open__modal');
const crossBtn = document.getElementById('cross__modal')
const modalContent = document.getElementById('modal__content')
const modalText = document.getElementById('modal__content__text')

const arrRandomText = ['Скоро вы отправитесь в поездку.', 
'Будет новое приятное знакомство.',
'Сегодня не путай настроение с самочувствием.',
'Не отказывай себе в отдыхе, он обещает быть незабываемым!',
'Просто скажи «Да». Скоро узнаешь, кому и когда!',
'Осторожно, впереди волна впечатлений!',
'Сегодня чаще смотри по сторонам, рядом кое-что интересное!',
'Дом будет самым уютным местом',
'Очень удачное время для воплощения любовных желаний.',
'Если опоздали к закату любуйтесь рассветом!',
'Ждите необычного признания в любви',
'Скоро в твоей жизни появится новый верный друг!',
'Ты готов к приключениям? Скоро они точно будут',
'Все проблемы ерунда, не грусти, всё обязательно наладится',
'У тебя много личных талантов, которые нравятся другим',
'Задумавшись о завтра, ты упустил сегодня.',
'Ваша цель достижима.',
'Из безвыходной ситуации всегда найдётся выход.',
'Изменится круг вашего общения.']

let count = 0;

btn.addEventListener('click', () => {
  if (count < 3) {
    modal.classList.add('modal__open');
    modalText.innerHTML = arrRandomText[getRandomIntInclusive(0, (arrRandomText.length - 1))];
    count++
  } else {
    modal.classList.add('modal__open');
    modalText.innerHTML = 'Предлагаю на сегодня закончить с магией. За новым предсказанием возвращайтесь завтра. Или можно просто обновить страницу, кек';
  }
});

crossBtn.addEventListener('click', () => {
  modalContent.classList.add('modal-close-animation')
  setTimeout(() => {
    modal.classList.remove('modal__open');
    modalContent.classList.remove('modal-close-animation')
  }, 2000);
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}