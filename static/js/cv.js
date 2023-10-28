window.addEventListener('DOMContentLoaded', (event) => {
    const uploadForm = document.getElementById('upload-form');
    const messagePopup = document.getElementById('message-popup');
  
    uploadForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
      showMessagePopup();
      setTimeout(redirectToIndex, 6000); // Redirect after 3 seconds (adjust the delay as needed)
    });
  
    function showMessagePopup() {
      messagePopup.style.display = 'block';
    }
  
    function redirectToIndex() {
      window.location.href = "{%url 'test'%}";
    }
  });
  