/*
Using the API documentation see how you can fetch from the Adventure Time Quote API. 
You will need to use DOM manipulation to display a random quote and the character photo of who said the quote. 
Each time you refresh the page a new quote and photo should be displayed.

Documentation URL: https://adventure-time-quote-api.glitch.me

Suggested Work Flow
1. See what URL you need to use to get a random quote to display.
2. Get the results to console.log
3. Find out how you you will use these results to display the quote to the page.
4. What part of the document will you need to select? How can you insert the quote to this portion of the document?
5. Once you get the quote to display add in the pictures depending on which character is saying the quote. 

Character pictures links: 
finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
tartToter : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
lsp : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
dukeOfNuts : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
princessBubblegum : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
iceKing : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
jake : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"

*/

let url = "https://adventure-time-quote-api.glitch.me/api/random";

const section = document.getElementById("quotes");

const charPic = {
  finn:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
  tartToter:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
  lady:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
  marceline:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
  lsp:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
  lemongrab:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
  dukeOfNuts:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
  fionna:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
  princessBubblegum:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
  iceKing:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
  bmo:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
  jake:
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015",
};

fetch(url)
  .then(function (result) {
    return result.json();
  })
  .then((json) => displayResults(json));

function displayResults(quote) {
  console.log(quote);

  let heading = document.createElement("h1");
  let img = document.createElement("img");

  section.appendChild(heading);
  section.appendChild(img);

  console.log(quote.split(":"));
  heading.textContent = quote.split(":")[1];

  let character = quote.split(":")[0];

  if (character === "Finn") {
    img.src = charPic.finn;
  } else if (character === "Tart Toter") {
    img.src = charPic.tartToter;
  } else if (character === "Lady") {
    img.src = charPic.lady;
  } else if (character === "Marceline") {
    img.src = charPic.marceline;
  } else if (character === "Lumpy Space Princess") {
    img.src = charPic.lsp;
  } else if (character === "Lemongrab") {
    img.src = charPic.lemongrab;
  } else if (character === "Duke of Nuts") {
    img.src = charPic.dukeOfNuts;
  } else if (character === "Fionna") {
    img.src = charPic.fionna;
  } else if (character === "Princess Bubblegum") {
    img.src = charPic.princessBubblegum;
  } else if (character === "Ice King") {
    img.src = charPic.iceKing;
  } else if (character === "BMO") {
    img.src = charPic.bmo;
  } else if (character === "Jake the Dog") {
    img.src = charPic.jake;
  }
}
