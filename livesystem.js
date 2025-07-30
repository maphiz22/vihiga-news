
const viewerElement = document.getElementById("viewerCount");
const presetStart = [420, 450, 500, 520, 580, 620];
const todayKey = new Date().toLocaleDateString();
let data = JSON.parse(localStorage.getItem("viewersData")) || {};

if (data.date !== todayKey) {
  const start = presetStart[Math.floor(Math.random() * presetStart.length)];
  data = {
    date: todayKey,
    count: start,
    startTime: Date.now(),
    direction: "up",
    target: start + Math.floor(Math.random() * 200 + 100),
  };
  localStorage.setItem("viewersData", JSON.stringify(data));
}

let viewerCount = data.count || 500;
let direction = data.direction || "up";
let target = data.target || viewerCount + 200;
const startTime = data.startTime || Date.now();

// Helper: Get time-based traffic multiplier
function getTrafficMultiplier() {
  const hour = new Date().getHours();
  if ((hour >= 7 && hour <= 9) || (hour >= 12 && hour <= 14) || (hour >= 18 && hour <= 20)) {
    return 1.4; // meal times
  }
  if (hour >= 22 || hour <= 5) {
    return 0.5; // night
  }
  return 1;
}

// Helper: Get realistic random change
function getSmoothRandomChange() {
  const baseChange = Math.floor(Math.random() * 16 + 5); // 5–20
  const isDecrease = Math.random() < 0.35; // 35% chance to decrease
  return isDecrease ? -Math.floor(baseChange / 2 + 1) : baseChange;
}

// Update viewer count every 2.5–4s randomly
function updateViewer() {
  const now = Date.now();
  const elapsed = now - startTime;
  const multiplier = getTrafficMultiplier();
  let change = getSmoothRandomChange();

  // During first 2 minutes: just fluctuate realistically
  if (elapsed < 120000) {
    viewerCount += change * multiplier;
  } else {
    // After 2 mins: follow direction to reach target smoothly
    if (direction === "up") {
      viewerCount += change * multiplier;
      if (viewerCount >= target) {
        direction = "down";
        target = viewerCount - Math.floor(Math.random() * 150 + 100);
      }
    } else {
      viewerCount -= change * multiplier;
      if (viewerCount <= target) {
        direction = "up";
        target = viewerCount + Math.floor(Math.random() * 150 + 100);
      }
    }
  }

  // Clamp and display
  viewerCount = Math.max(300, Math.min(10000, Math.round(viewerCount)));
  viewerElement.textContent = viewerCount.toLocaleString();

  // Save
  data.count = viewerCount;
  data.direction = direction;
  data.target = target;
  localStorage.setItem("viewersData", JSON.stringify(data));

  // Repeat on a random interval (2.5s–4s)
  const nextUpdate = Math.floor(Math.random() * 1500 + 2500);
  setTimeout(updateViewer, nextUpdate);
}

viewerElement.textContent = viewerCount.toLocaleString();
setTimeout(updateViewer, 2000); // Start after 2s for natural load


