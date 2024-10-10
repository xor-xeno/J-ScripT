// Function to open external links in a new tab
function openLink(url) {
    window.open(url, '_blank');
}

document.getElementById('githubIcon').onclick = function() {
    openLink('https://github.com/xor-xeno');
};
document.getElementById('youtubeIcon').onclick = function() {
    openLink('https://www.youtube.com/@xor_xeno');
};

// Define the API URL and API Key
const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=';
const apiKey = '---------';//https://api-ninjas.com/ get key from this website for free

// Function to fetch recipes based on a query (e.g., pizza, pasta)
async function fetchRecipe(query) {
    const url = apiUrl + query;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        const data = await response.json();

        // Check if data is available
        if (data.length > 0) {
            const recipe = data[0]; // Get the first recipe from the array

            // Update the HTML with recipe data
            document.getElementById('foodName').textContent = recipe.title; // Set the food name
            document.getElementById('description').textContent = recipe.instructions; // Set the description
            // document.getElementById('foodPhoto').src = 'images/recipe.jpg'; // Placeholder image (replace with API image if available)
        } else {
            document.getElementById('foodName').textContent = 'No recipe found';
            document.getElementById('description').textContent = 'Please try searching for another food item.';
            // document.getElementById('foodPhoto').src = 'images/no-recipe.jpg'; // Placeholder for no recipe
        }

    } catch (error) {
        console.error('Error fetching recipe:', error);
        document.getElementById('foodName').textContent = 'Error';
        document.getElementById('description').textContent = 'An error occurred while fetching the recipe.';
    }
}

// Attach the search function to the button click
document.querySelector('button').onclick = function() {
    const query = document.getElementById('SBar').value; // Get the input value
    if (query) {
        fetchRecipe(query); // Fetch recipe based on the input value
    } else {
        alert('Please enter a food name to search.');
    }
};
