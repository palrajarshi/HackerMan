const arr = [
  "Initialising Brute Force...",
  "Acquiring System Information...",
  "System Info Fetched:",
  " Card name: Arduino 780",
  "Manufacturer: MI Redmi (Xiaomi) TM",
  "Chip type: Arduino UHD Family",
  "DAC type: Internal",
  "Device Type: Full Device (POST)",
  "Device Key: EnumPCIVEN_8086&DEV_5917&SUBSYS_396B17AA&REV_07",
  "Device Status: 0180200A [DN_DRIVER_LOADED|DN_STARTED|DN_DISABLEABLE|DN_NT_ENUMERATOR|DN_NT_DRIVER]",
  "Device Problem Code: No Problem",
  "Driver Problem Code: Unknown",
  "Display Memory: 4176 MB",
  "Dedicated Memory: 128 MB",
  "Shared Memory: 4048 MB",
  "Current Mode: 720 x 340 (64 bit) (90Hz)",
  "HDR Support: Not Supported",
  "Display Topology: Internal",
  "Rank Of Driver: 00CF0001",
  "Connecting to servers...",
  "Connecting to Local Host...",
  "Connecting to https://www.facebook.com",
  "Connection Request Success 1",
  "Connection Request Success 2 to Local Host...",
  "Connection Request Success 3 to https://www.facebook.com",
  "Acquiring Username...",
  "Username Fetched",
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
      window.location = "https://www.facebook.com";
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
