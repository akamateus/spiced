console.clear();

const url = "https://swapi.dev/api/people";

// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   //   return data;
//   console.log(data);
// }

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      console.log(data);
      console.log(data.results[2].eye_color);
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred");
  }
}

fetchData();
// console.log(data.results[2].eye_color);
