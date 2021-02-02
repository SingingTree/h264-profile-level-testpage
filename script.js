function onSelectionChange() {
  let profileSelector = document.getElementById("profileSelector");
  let levelSelector = document.getElementById("levelSelector");
  if (!profileSelector.value || !levelSelector.value) {
    return;
  }
  fileName = `${profileSelector.value}-${levelSelector.value}.mp4`;
  let mediaElement = document.getElementById("media");
  mediaElement.src = `media/${fileName}`;
}

function setup() {
  const profiles = [
    "",
    "baseline",
    "main",
    "high",
    "high10",
    "high422",
    "high444",
]

  const levels = [
    "",
    "1",
    "1b",
    "1.1",
    "1.2",
    "1.3",
    "2",
    "2.1",
    "2.2",
    "3",
    "3.1",
    "3.2",
    "4",
    "4.1",
    "4.2",
    "5",
    "5.1",
    "5.2",
    "6",
    "6.1",
    "6.2",
  ]
  let profileSelector = document.getElementById("profileSelector");
  let levelSelector = document.getElementById("levelSelector");

  for(i = 0; i < profiles.length; ++i) {
    let option = document.createElement('option');
    option.value = profiles[i];
    option.innerHTML = profiles[i];
    profileSelector.add(option);
  }

  for(i = 0; i < levels.length; ++i) {
    let option = document.createElement('option');
    option.value = levels[i];
    option.innerHTML = levels[i];
    levelSelector.add(option);
  }

  profileSelector.onchange = onSelectionChange;
  levelSelector.onchange = onSelectionChange;
}
