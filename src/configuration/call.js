const calls = {
  get: async (url = "") => {
    const response = await fetch(url);
    return await response.json();
  },
  post: async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log("result-post", response);
    return await response.json(); // parses JSON response into native JavaScript objects
  }
};

export default calls;
