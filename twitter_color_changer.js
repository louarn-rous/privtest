// twitter_color_changer.js

(function() {
    'use strict';

    console.log("Userscript is running");

    // List of usernames and their desired name colors
    const userProfiles = {
        "krmaher": "red",
        "HeerJeet": "blue",
        // Add more usernames and colors as needed
    };

    // Function to change the display name color of specific users
    function changeDisplayNameColor() {
        console.log("changeDisplayNameColor function is executing");

        // Find all elements that contain display names
        const displayNameElements = document.querySelectorAll('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep');

        // Loop through each display name element
        displayNameElements.forEach(element => {
            // Get the display name from the element
            const displayName = element.textContent.trim();

            console.log("Found display name:", displayName);

            // Check if the display name is in the userProfiles object
            if (userProfiles.hasOwnProperty(displayName)) {
                console.log("Display name found in userProfiles object:", displayName);

                // Change the color of the display name
                element.style.color = userProfiles[displayName];
                console.log("Changed color for display name of user:", displayName);
            }
        });
    }

    // Run the function when the page is loaded and when it changes (Twitter uses dynamic content loading)
    changeDisplayNameColor();
    document.addEventListener('scroll', changeDisplayNameColor);
})();
