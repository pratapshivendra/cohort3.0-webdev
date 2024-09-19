document.addEventListener('DOMContentLoaded', () => {
    const allcolors = document.getElementById("colorpicker");
    const buttons = allcolors.getElementsByClassName("options");
    const inputBox = document.querySelector(".ipbox");
    const addbutton = document.querySelector(".check");

    function changebgcolor(action) {
        const color = action.target.style.backgroundColor;
        document.body.style.backgroundColor=color;
    }

    
    function isValidColor(color) {
        const s = new Option().style;
        s.color = color;
        return s.color === color || /^#[0-9A-F]{6}$/i.test(color);
    }

    function addColorButton() {
        const colorName = inputBox.value;
        if(colorName==='')
            return;
        if (isValidColor(colorName)) {
            
            const newButton = document.createElement('button');
            newButton.className = 'options';
            newButton.style.backgroundColor = colorName;
            newButton.style.color = 'black';
            newButton.textContent = colorName.charAt(0).toUpperCase() + colorName.slice(1); // Capitalize the first letter
            
            newButton.addEventListener('click', changebgcolor);
            
            allcolors.appendChild(newButton);
        } else {
            alert('Invalid color. Please enter a valid color name or hex code.');
        }
        inputBox.value = ''; // Clear the input box after adding
    }
    
    function handleEnterKey(action) {
        if(action.key==='Enter')
            addColorButton();
    }
    inputBox.focus();

    for(let button of buttons) {
        button.style.border = button.style.backgroundColor;
        button.addEventListener('click',changebgcolor);
    }
    addbutton.addEventListener('click',addColorButton);
    inputBox.addEventListener('keydown', handleEnterKey);
});