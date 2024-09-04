// different parts of the travel recommendation
const destinations = [
    {
        name: "Paris",
        activities: ["visiting the Eiffel Tower", "exploring the Louvre Museum", "cruising the Seine River"],
        highlights: ["iconic Eiffel Tower", "majestic Notre-Dame Cathedral", "romantic Montmartre district"]
    },
    {
        name: "Tokyo",
        activities: ["visiting Shibuya Crossing", "exploring temples in Asakusa", "enjoying sushi in Tsukiji Market"],
        highlights: ["vibrant Shinjuku district", "historic temples and shrines", "modern architecture of Tokyo Skytree"]
    },
    {
        name: "New York City",
        activities: ["walking through Central Park", "visiting Times Square", "exploring the Metropolitan Museum of Art"],
        highlights: ["iconic Statue of Liberty", "breathtaking views from the Empire State Building", "broadway shows in Theater District"]
    }
];

// generate a new travel recommendation
function generateTravelRecommendation() {
    // get a random destination
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];

    // randomly select an activity and highlight from the destination
    const randomActivity = randomDestination.activities[Math.floor(Math.random() * randomDestination.activities.length)];
    const randomHighlight = randomDestination.highlights[Math.floor(Math.random() * randomDestination.highlights.length)];

    // combine them 
    const recommendation = `For your next trip, visit ${randomDestination.name} and enjoy ${randomActivity}. Don't miss the ${randomHighlight}!`;

    // display the recommendation
    document.getElementById("travelRecommendation").innerText = recommendation;
}

// Generate a recommendation when the page loads
generateTravelRecommendation();
