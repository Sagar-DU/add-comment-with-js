//Step 1: event listener to post button done
document.getElementById('btn-post').addEventListener('click', function () {
    postComment();
}
)

// Posting comment by KeyboardEvent
document.getElementById('comment-box').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default "Enter" key behavior (e.g., form submission)
        postComment();
    }
});

// Comment function
function postComment() {
    // Step 2: get the comment done
    const commentBox = document.getElementById('comment-box');
    // Step 3: get the new comment done
    const newComment = commentBox.value;
    // Step 4: get the comment-container
    const commentContainer = document.getElementById('comment-container');
    // Step 5: created an element (p tag)
    const p = document.createElement('p');
    // Step 6: insert the new comment in the new p tag
    p.innerText = newComment;
    // Step 7: appended the new comment to the container
    commentContainer.appendChild(p);
    // Step 8: clear the text area
    commentBox.value = '';
}