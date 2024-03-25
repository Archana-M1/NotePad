const noteArea = document.getElementById('note-area');
const addNoteButton = document.getElementById('add-note');
const saveNoteButton = document.getElementById('save-note');
const message = document.getElementById('message');

let notes = []; // Array to store notes

addNoteButton.addEventListener('click', () => {
    const note = noteArea.value.trim(); // Get and trim note content
    if (note) {
        notes.push(note); // Add note to notes array
        noteArea.value = ''; // Clear text area
        message.textContent = ''; // Clear any previous message
        saveNoteButton.disabled = false; // Enable save button
    } else {
        message.textContent = 'Please enter a note!';
    }
});

saveNoteButton.addEventListener('click', () => {
    // Implement your logic to save notes here (e.g., Local Storage)
    console.log('Note saved!', notes); // Example log for now
    message.textContent = 'Note saved successfully!';
    saveNoteButton.disabled = true; // Disable save button again
});
