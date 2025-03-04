function goToHome() {
    alert("Going to Home!");
    // location.href = "home.html";  // Uncomment this if you have a home page
}

function goToFriends() {
    alert("Going to Friends List!");
}

function createPost() {
    alert("Opening Post Creation!");
}

function viewNotifications() {
    alert("Viewing Notifications!");
}

function goToEcommerce() {
    alert("Going to E-commerce Section!");
}

function goToSettings() {
    alert("Opening Settings!");
}

function searchFunction() {
    let query = document.querySelector(".search-bar input").value;
    alert("Searching for: " + query);
}