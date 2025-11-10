let club = [
  { vards: "Jānis", uzvards: "Liepa", loma: "leader", hour: 1 },
  { vards: "Janka", uzvards: "Dzirnava", loma: "leader", hour: 3 },
  { vards: "Kevins", uzvards: "Gilovs", loma: "member", hour: 2 },
  { vards: "Sergejs", uzvards: "Pods", loma: "member", hour: 1 },
  { vards: "Andrejs", uzvards: "Brīvna", loma: "member", hour: 7 },
  { vards: "Pēteris", uzvards: "Merkurijs", loma: "member", hour: 3 },
  { vards: "Vītols", uzvards: "Garāža", loma: "member", hour: 2 },
];

console.log("Vadītāji:");
for (let i = 0; i < club.length; i++) {
  if (club[i].loma === "leader") {
    console.log(club[i].vards + " " + club[i].uzvards);
  }
}

let totalHours = 0;
for (let i = 0; i < club.length; i++) {
  totalHours += club[i].hour;
}
console.log("Kopā ir " + totalHours + " brīvprātīgo stundas.");

let memberHours = 0;
for (let i = 0; i < club.length; i++) {
  if (club[i].loma === "member") {
    memberHours += club[i].hour;
  }
}
console.log("Biedri kopā nostrādājuši " + memberHours + " stundas.");
