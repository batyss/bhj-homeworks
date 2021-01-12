const enterForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
const inputField = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');

enterForm.addEventListener('submit', (evt) => evt.preventDefault());
enterForm.addEventListener('keydown', addTask);
enterForm.addEventListener('click', addTask);

function addTask(event) {
	if (inputField.value.trim() != '' && (event.keyCode === 13 || event.target === btn)) {	
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