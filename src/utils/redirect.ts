function redirectToChat(evt: Event) {
  evt.preventDefault();
  window.location.replace('/');
}
function redirectToProfile(evt: Event) {
  evt.preventDefault(); 
  window.location.replace('/profile');
}

function redirect() {
  const buttonSignin = document.querySelector('.identity_signin');
  const buttonSave = document.querySelector('.form_save');

  if (buttonSignin) {
    buttonSignin.addEventListener('submit', redirectToChat);
  }
  if (buttonSave) {
    buttonSave.addEventListener('submit', redirectToProfile);
  }
}

export default redirect;
