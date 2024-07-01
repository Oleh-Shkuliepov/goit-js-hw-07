const userName = document.querySelector('#name-input');
const nameOutput = document.querySelector("#name-output");

function hendleInput(event) {
    const trimName = event.currentTarget.value.trim();
    
    if (trimName) {
        nameOutput.textContent = trimName;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
}

userName.addEventListener("input", hendleInput);