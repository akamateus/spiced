console.clear();

// function handleUserLogin(onSuccess) {
//   onSuccess(showWelcomeMessage);
//   // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
// }

// Call handleUserLogin below!

function showWelcomeMessage() {
  console.log("Welcome! you're logged in now.");
}

// handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Welcome! You are logged in now.2");
});

handleUserLogin(showWelcomeMessage);
