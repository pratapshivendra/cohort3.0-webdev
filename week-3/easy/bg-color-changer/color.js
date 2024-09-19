let namedColors = [];

// Fetch color names from the API
async function fetchColors() {
    try {
        const response = await fetch('https://csscolorsapi.com/api/colors');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.status === 200) {
            namedColors = data.colors.map(color => color.name.toLowerCase()); // Convert names to lowercase
            console.log('Loaded colors:', namedColors); // For debugging
        } else {
            throw new Error(data.message || 'Failed to retrieve colors');
        }
    } catch (error) {
        console.error('Error fetching colors:', error);
        alert('Failed to load color data. Please try again later.');
    }
}