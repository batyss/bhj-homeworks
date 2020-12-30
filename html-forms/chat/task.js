const badge = document.querySelector('.chat-widget');
badge.addEventListener('click', () => badge.classList.add('chat-widget_active'));

const messageBox = document.querySelector('.chat-widget__input');
messageBox.addEventListener('keydown', sendMessage);

const robotPhrases = [
"Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
"До свидания!",
"Никого нет дома",
"Кто здесь?",
"Где ваша совесть?",
"Мы ничего не будем вам продавать!",
"Не пишите нам больше!",
"Нет уж",
"Белым по зеленому же написано..",
"Откуда такая агрессия?"
]

const chatWindow = document.querySelector('.chat-widget__messages-container');

function sendMessage(еvent) {
	if (event.keyCode === 13 && messageBox.value != "") { 
		let time = new Date().toLocaleTimeString().slice(0,-3);
		document.querySelector('.chat-widget__messages').innerHTML += `
  			<div class="message message_client">
   			 <div class="message__time">${time}</div>
    		<div class="message__text">${messageBox.value}</div>
  			</div>
			`;
		document.querySelector('.chat-widget__messages').innerHTML += `
  			<div class="message">
  			<div class="message__time">${time}</div>
    		<div class="message__text">${robotPhrases[Math.floor(Math.random() * robotPhrases.length)]}</div>
    		</div>
			`;
		messageBox.value = "";
		chatWindow.scrollTop = chatWindow.scrollHeight;
	}
}