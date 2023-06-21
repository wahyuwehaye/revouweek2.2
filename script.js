// Function to fetch data from the JSONPlaceholder API
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
  
      // Update the about me section
      document.getElementById('about-me').textContent = `Name: ${user.name}, Email: ${user.email}`;
  
      // Fetch user's posts
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      const posts = await postsResponse.json();
  
      // Update the posts section
      const postsContainer = document.getElementById('posts');
      posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        postsContainer.appendChild(listItem);
      });
  
      // Fetch a random dummy image
      const imageResponse = await fetch('https://picsum.photos/200/300');
      const imageURL = imageResponse.url;
  
      // Update the dummy image
      const dummyImage = document.getElementById('dummy-image');
      dummyImage.src = imageURL;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  
  // Function to handle the button click
  function showAlert() {
    alert('Button clicked!');
  }
  
  // Fetch data when the page loads
  window.onload = fetchData;
  