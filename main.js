const data = [
  {
    name: "Burj Khalifa",
    height: "828"
  },
  {
    name: "Shanghai Tower",
    height: "623"
  },
  {
    name: "Abraj Al-Bait Clock Tower",
    height: "601"
  },
  {
    name: "Ping An Finance Centre",
    height: "599"
  },
  {
    name: "Lotte World Tower",
    height: "544.5"
  },
  {
    name: "One World Trade Center",
    height: "541.3"
  },
  {
    name: "Guangzhou CTF Finance Center",
    height: "530"
  }
];

const main = function() {
  const container = d3.select("#buildings");
  const svg = container
    .append("svg")
    .attr("width", 800)
    .attr("height", 500);

  svg
    .selectAll()
    .data(data)
    .enter()
    .append("rect")
    .attr("height", n => n.height / 2)
    .attr("width", 35)
    .attr("x", (n, i) => i * 70 + 80)
    .attr("y", n => 450 - n.height / 2)
    .attr("fill", (n, i) => `rgb(${n.height / 2}, ${i * 50} ,${i * 20})`);
};

window.onload = main;