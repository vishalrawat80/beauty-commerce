// your code goes here
const formTitle = document.getElementById('form-title');
const formButton = document.getElementById('form-button');
const toggleText = document.getElementById('toggle');
const form = document.getElementById('form');

toggleText.addEventListener('click', () => {
  if (formTitle.textContent === 'Login') {
    formTitle.textContent = 'Sign Up';
    formButton.textContent = 'Sign Up';
    toggleText.innerHTML = 'Already have an account? <span>Login</span>';
  } else {
    formTitle.textContent = 'Login';
    formButton.textContent = 'Login';
    toggleText.innerHTML = "Don't have an account? <span>Sign Up</span>";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`${formTitle.textContent} form submitted!`);
});
