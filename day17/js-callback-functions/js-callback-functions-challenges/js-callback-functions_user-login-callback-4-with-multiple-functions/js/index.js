console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Billy") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

// function showWelcomeMessage(userName, userRole) {
//   console.log(`Welcome ${userName}! You're logged in now as ${userRole}.`);
// }

// function showErrorMessage(ErrorMessage) {
//   console.log(`Login error: ${ErrorMessage}`);
// }

// handleUserLogin(showWelcomeMessage, showErrorMessage, "Billy");

//--------------------------------------------------

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}, you're logged in as ${userRole}`);
}

function showErrorMessage(ErrorMessage) {
  console.log(`Login error: ${ErrorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Billy");
