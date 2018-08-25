var neighbours = ["Indi","Eszter","Laci","<strong>Tamas</strong>"];

neighbours.forEach(nevek => $("ul").append("<li>" + nevek + "</li>"));

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
  };