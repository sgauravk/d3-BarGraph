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

const addRectangles = function(svg) {
  return svg
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

const addHeight = function(svg) {
  return svg
    .selectAll()
    .data(data)
    .enter()
    .append("text")
    .text(x => x.height)
    .attr("x", (n, i) => i * 70 + 80)
    .attr("y", n => 444 - n.height / 2);
};

const addNames = function(svg) {
  return svg
    .selectAll()
    .data(data)
    .enter()
    .append("text")
    .text(x => x.name)
    .attr("id", "names")
    .attr("x", n => 470 - n.height / 2)
    .attr("y", (n, i) => -(i * 70 + 90));
};

const addAxis = function(svg) {
  return (
    svg
      .append("line")
      .attr("x1", 50)
      .attr("y1", 450)
      .attr("x2", data.length * 70 + 80)
      .attr("y2", 450) &&
    svg
      .append("line")
      .attr("x1", 50)
      .attr("y1", 10)
      .attr("x2", 50)
      .attr("y2", 451)
  );
};

const main = function() {
  const svg = d3
    .select("#buildings")
    .append("svg")
    .attr("width", data.length * 70 + 100)
    .attr("height", 500);

  addRectangles(svg);
  addHeight(svg);
  addNames(svg);
  addAxis(svg);
};

window.onload = main;
