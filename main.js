const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");


const tasksContainer = document.querySelector('.tasks-container')

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddtask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid) {
     return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p')
    taskContent.innertext = inputElement.value;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash');

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer)
    
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid)
        return inputElement.classList.remove("error");
}
addTaskButton.addEventListener("click", () => handleAddtask());


inputElement.addEventListener("change", () => handleInputChange())