// Get the text-field 
document.getElementById('text-field').addEventListener ('keyup', function(event){
    // Get the value of the text-field 
    const text = event.target.value;
    // Get the delete button 
    const deleteButton = document.getElementById ('delete-btn');
    if (text === 'Delete') {
        // Enables delete button 
        deleteButton.removeAttribute ('disabled');
    }
    else {
        // disables it delete button for miss matches 
        deleteButton.setAttribute('disabled',true);
    }
})
// Let's delte the thing with a click event
document.getElementById ('delete-btn').addEventListener ('click', function(){
    // Get the text that you want to delete 
    const letsDelete = document.getElementById ('delete');
    letsDelete.style.display = 'none';
    document.getElementById ('text-field').value = '';
})

