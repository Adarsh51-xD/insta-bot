const { execSync } = require('child_process');
const fetch = require('node-fetch');

// Function to fetch comments and process comment IDs
async function fetchAndProcessComments(postId) {
  try {
    // Make the API request
    const response = await fetch(`https://graph.instagram.com/v12.0/${postId}/comments?fields=id`);
    
    // Parse the response as JSON
    const responseData = await response.json();

    // Access the array of comment objects in the 'data' field
    const commentsData = responseData.data;

    // Iterate over each comment object and access the comment IDs
    for (const comment of commentsData) {
      const commentId = comment.id;

      // Execute the Batch script within the loop, quoting the parameters
      execSync(`like_comment.bat "${commentId}" "${yourAccessToken}"`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Replace 'your-post-id' and 'yourAccessToken' with the actual Post ID and Access Token
const postId = 'your-post-id';
const yourAccessToken = 'your-access-token';

// Call the function to fetch and process comments
fetchAndProcessComments(postId);
