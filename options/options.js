const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("timer-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value ?? 60;
  chrome.storage.sync.set({ name, notificationTime });
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  nameInput.value = res.name ?? "???";
  timeInput.value = res.notificationTime ?? 60;
});
