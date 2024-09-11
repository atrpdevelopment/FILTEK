var currentVisibleId = null; // Track the currently visible section

function toggleDetails(id) {
    var element = document.getElementById(id);

    // Hide all sections first
    var details = document.getElementsByClassName('details');
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }

    // If the clicked section is already visible, hide it and reset the tracker
    if (currentVisibleId === id) {
        currentVisibleId = null; // No section is visible anymore
    } else {
        element.style.display = 'block'; // Show the clicked section
        currentVisibleId = id; // Update the tracker with the current section
    }
}