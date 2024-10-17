document.addEventListener("DOMContentLoaded", function() {
    // grabs everything it needs from the DOM
    const nameInput = document.querySelector("#username");
    const saveButton = document.querySelector("#save-btn");
    const clearButton = document.querySelector("#clear-btn");
    const displayArea = document.querySelector('h1[data-source="gpt-storage"]');
    const displayName = document.querySelector("#display-name");

    // this func handles the saved displayed name.
    function displaySavedName() {
        const savedName = localStorage.getItem("userName");
        if (savedName) {
            displayArea.textContent = `Welcome, ${savedName}!`;
            displayName.textContent = savedName;  // displays the name below
        } else {
            displayArea.textContent = "Welcome, User!";
            displayName.textContent = "";  // clear if if nothing is saved
        }
    }

    // when we click save, it saves it to the local storage.
    saveButton.addEventListener("click", function() {
        const userName = nameInput.value.trim();  // added to get rid of white space (thinking of expanding on this)
        if (userName) {
            localStorage.setItem("userName", userName);
            displaySavedName();  // updates the 'Welcome'
        } else {
            alert("Please enter a valid name!");  // added a notifier just in case of empty input
        }
    });

    // when clicking clear name, gets rid of it from the local storage
    clearButton.addEventListener("click", function() {
        localStorage.removeItem("userName");
        nameInput.value = "";  
        displaySavedName(); 
    });

    displaySavedName();
});
