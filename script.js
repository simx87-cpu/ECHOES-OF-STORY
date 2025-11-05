const timelineData = [
  { tahun: "3000 SM", peristiwa: "Peradaban Mesir Kuno dimulai di Sungai Nil" },
  { tahun: "500 SM", peristiwa: "Filsuf Yunani seperti Socrates mulai berpengaruh" },
  { tahun: "1293 M", peristiwa: "Berdirinya Kerajaan Majapahit di Nusantara" },
  { tahun: "1945 M", peristiwa: "Proklamasi Kemerdekaan Indonesia" }
];

const container = document.getElementById("timeline-container");

timelineData.forEach(item => {
  const el = document.createElement("div");
  el.classList.add("timeline-item");
  el.innerHTML = `<strong>${item.tahun}</strong> — ${item.peristiwa}`;
  container.appendChild(el);
});