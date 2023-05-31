console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newArticle = document.createElement("article");
newArticle.classList.add("post");
document.body.append(newArticle);

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newArticle.append(newParagraph);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newArticle.append(newFooter);

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newFooter.append(newSpan);
newSpan.textContent = "@username";

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newFooter.append(newButton);
newButton.textContent = "♥ Like";

function handleLikeNewButtonClick(event) {
  const newButtonElement = event.target;
  newButtonElement.classList.toggle("post__button--liked");
}
newButton.addEventListener("click", handleLikeButtonClick);

// function handleLikeNewButtonClick(event) {
//   const buttonElement = event.target;
//   newButton.classList.toggle("post__button--liked");
