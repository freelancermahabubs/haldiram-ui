// Get the menu item and modal elements
var menuSweets = document.getElementById('menu-sweets');
var modalSweets = document.getElementById('modal-sweets');

// Function to show the modal
function showModal() {
  modalSweets.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modalSweets.style.display = "none";
}

// When the user hovers over the menu item, show the modal
menuSweets.addEventListener('mouseenter', showModal);

// When the user hovers over the modal itself, keep it open
modalSweets.addEventListener('mouseenter', showModal);

// When the user moves the mouse away from both the menu item and the modal, hide the modal
menuSweets.addEventListener('mouseleave', hideModal);
modalSweets.addEventListener('mouseleave', hideModal);
