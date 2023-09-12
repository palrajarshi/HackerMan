const arr = [
  "Initialising Brute Force...",
  "Acquiring System Information...",
  "Connecting to servers...",
  "Connecting to Local Host...",
  "Connecting to https://www.facebook.com",
  "Connection Request Success 1",
  "Connection Request Success 2 to Local Host...",
  "Connection Request Success 3 to https://www.facebook.com",
  "Acquiring Username...",
  "Username Fetched: Priyesh Kumar Saha",
  "Trying Combinations...",
  "Over 1000 Combinations tried...",
  "Over 2000 Combinations Tried...",
  "Connecting to Server 1...",
  "Intialising Method Brute Force",
  "Password Acquired...",
  "Redirecting to https://www.facebook.com",
];

const run = (message, delay, i) => {
  setTimeout(() => {
    document.body.innerHTML += `${message} <br>`;
    if (i === arr.length - 1) {
      console.log("as");
      //   window.location = "https://www.facebook.com";
    }
  }, delay);
};

const runScript = async () => {
  for (let i = 0; i < arr.length; i++) {
    const delay = i * 2000;
    console.log(i);
    await run(arr[i], delay, i);
  }
};
runScript();
