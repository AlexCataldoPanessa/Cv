



document.getElementById("esperienza-input").addEventListener("click", function () {
    let contenitore = document.getElementById("contenitore-div");
    let aggiungiEsperienza = document.getElementById("aggiungi-esperienza").value;
    
    let li = document.createElement("li");
    let ul = document.getElementById("ulIn");
    let esperienza = document.createTextNode(aggiungiEsperienza);
    console.log(esperienza);
  
    ul.appendChild(li);
    li.appendChild(esperienza);
    

})