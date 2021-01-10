const enterForm = document.getElementById('tasks__form');
enterForm.addEventListener('submit', (evt) => evt.preventDefault());
const tasksList = document.getElementById('tasks__list');
const inputField = document.getElementById('task__input');
inputField.addEventListener('keydown', addTask);

function addTask(event) {
	if (inputField.value != '' && event.keyCode === 13) {
		tasksList.insertAdjacentHTML('beforeend', 
       		`<div class="task">
			<div class="task__title">${inputField.value}</div>
			<a href="#" class="task__remove">&times;</a>
        	</div>`)
       	inputField.value = '';
		const remover = tasksList.lastChild.getElementsByTagName('a')[0];
		remover.addEventListener('click', (evt) => evt.target.closest('.task').remove());
	}
}