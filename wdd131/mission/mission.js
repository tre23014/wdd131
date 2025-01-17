theme = document.getElementById("theme");
const themeSelector = document.querySelector('#themeSelector');

function changeTheme() {
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    const currentTheme = themeSelector.value;

    const body = document.body;
    const logo = document.querySelector('#logo');

    if (surrentTheme === 'dark') {
        body.classList.add('dark');

        logo.src = 'images/byui-logo_white.png';
    }

    else {
        body.classList.remove('dark');

        logo.src = 'logo.png';
    }



}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);