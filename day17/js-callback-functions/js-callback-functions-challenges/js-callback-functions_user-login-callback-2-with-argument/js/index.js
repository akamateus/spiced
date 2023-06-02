console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Billy");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`welcome ${userName}. You're logged in`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName) => {
  console.log(`welcome ${userName}. You're logged in`);
});
