// Get the button with id 'button' on the first page
const mainButton = document.getElementById('button');

// Add a click event listener to the main button
mainButton.addEventListener('click', function() {
    alert('Button clicked!');

    // Change the background color to red
    document.body.style.backgroundColor = 'red';

    // Change the font color to white
    document.body.style.color = 'white';

    // Change the font size to 24 pixels
    document.body.style.fontSize = '24px';

    // Add a border around the body with a 5-pixel solid black line
    document.body.style.border = '5px solid black';

    // Disable the button after it's clicked
    this.disabled = true;

    // Change the text of the button to "Button Pressed"
    this.innerHTML = 'Button Pressed';
});

// Get all elements with the class 'button' (sub-buttons on page 3)
const subButtons = document.getElementsByClassName('button');

// Iterate over the collection of sub-buttons and add event listeners
for (let i = 0; i < subButtons.length; i++) {
    subButtons[i].addEventListener('click', function() {
        alert('Sub-button clicked!');

        // Change the background color to red
        document.body.style.backgroundColor = '#f4af01';

        // Change the font color to white
        document.body.style.color = 'white';

        // Change the font size to 24 pixels
        document.body.style.fontSize = '24px';

        // Add a border around the body with a 5-pixel solid black line
        document.body.style.border = '5px solid black';

        // Add a hover effect to the button
        this.style.backgroundColor = 'blue';
        this.style.color = 'white';

        // Disable the button after it's clicked
        this.disabled = true;

        // Change the text of the button to "Button Pressed"
        this.innerHTML = 'Button Pressed';
    });
}
