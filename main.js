let header = document.querySelector("header");
let section = document.querySelector("section");



//variable that stores URL
let requestURL = "https://manuel19451971.github.io/javaS/Products.json";


//creating and XHR

let request = new XMLHttpRequest();


//Make request
request.open('GET', requestURL)
request.responseType = 'json';
request.send();



 request.onload = function(){
 let op = request.response;
 console.log("hello");
 populateHeader(op);
 topThings(ops);
}

function populateHeader(jsonObj) {

  let headerH1 = document.createElement("h1");
  headerH1.textContent = jsonObj["things"];
  header.appendChild(headerH1);
}


function topThings(jsonObj){

let topThings = jsonObj["Product"];

  for (let i = 0; i < topThings.length; i++){

    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let list = document.createElement("ul");

    img.setAttribute("src", "C:\Users\manue\OneDrive\Desktop\javascript\Project3\images" + topThings[i].image);
    img.setAttribute("alt", topThings[i].image );

      h2.textContent = topThings[i].name;
      p1.textContent = "Price: " + topThings[i].Price;
      p2.textContent = "Description: " + topThings[i].Description;

      let max = topThingsthings[i].features;
      for(let j = 0; j < max.length; j++ ) {
        let listItem = document.createElement("li");
        listItem.textContent = max[j];
        list.appendChild(listItem);
      }


      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(list);
      section.appendChild(article);

  }
}
