// Allow dropping items into the container
function allowDrop(event) {
    event.preventDefault();
    document.getElementById("dragText").style.display = "block"; // Show the "Drag items here" text
}

// Start dragging an item
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    document.getElementById("dragText").style.display = "none"; // Hide the "Drag items here" text
}

// Drop an item into the container
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var draggedItem = document.getElementById(data);
    var container = event.target;

    if (container.id === "container2") {
        container.appendChild(draggedItem);
        showSuccessMessage("Item dropped successfully!");
        document.getElementById("dragText").style.display = "block"; // Show the "Drag items here" text
    }
}

// Show a success message
function showSuccessMessage(message) {
    var successMessage = document.getElementById("successMessage");
    successMessage.textContent = message;
}

// Store the original HTML structure of container1
var container1 = document.getElementById("container1");
var container1OriginalHTML = container1.innerHTML;

// Reset the containers to their original state
function resetContainers() {
    var container2 = document.getElementById("container2");
    container2.innerHTML = "";
    showSuccessMessage("Reset successful!");

    container1.innerHTML = container1OriginalHTML; // Restore the original HTML structure of container1
}

// Get all items and add drag event listeners
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });
});
