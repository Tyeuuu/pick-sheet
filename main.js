const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var masterList = [];

fs.readdirSync("_DROP_FOLDER/").forEach((file) => {
  //Print file name
  //console.log(file)

  const html = fs.readFileSync(
    "C:/Users/Tye/dev/pick-sheet/_DROP_FOLDER/" + file,
    "utf8"
  );
  //  console.log(html);

  const dom = new JSDOM(html);

  // PER H2 ELEMENT

  let summaryList = [];
  let card = dom.window.document.querySelectorAll(".card");
  let businessName = dom.window.document.getElementById("business");
  let clientOrder = dom.window.document.getElementById("clientorder");
  let productionOrder = dom.window.document.getElementById("productionorder");
  let count = 0;
  let h3elems = dom.window.document.querySelectorAll("h3");

  if (card.length) {
    for (let i = 0; i < card.length; i++) {
      count++;
      summaryList.push(card[i].innerHTML);

      if (card[i].innerHTML) {
        card[i].innerHTML = card[i].innerHTML
          .replace('<p class="emoji">', "")
          // .replace("  ", " ")
          // .replace("  ", " ")
          .replace("<p>", "")
          .replace("</p>", ",")
          .replace("<h2>", ",")
          // .replace("</h2>", "")
          .replace(" <div>", "")
          .replace("<div>", "")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("⬜️", ",")
          .replace("></div>", "")
          .replace(
            '<textarea type="text" name="notes" id="notesinput"></textarea>',
            ""
          )
          .replace("<h3>", "");

        console.log(card[i].innerHTML);

        fs.appendFile(
          "summary.xls",
          "\ufeff" +
            count +
            "," +
            `${businessName.value.toString()}` +
            "," +
            `${clientOrder.value.toString()}` +
            "," +
            `${productionOrder.value.toString()}` +
            "," +
            card[i].innerHTML +
            "\r\n",
          function (err) {
            if (err) throw err;
          }
        );
      }
    }
    masterList.push(summaryList);
    // console.log(summaryList);
  }
});

// console.log(masterList);

/*
let summaryList = [];
var elems = document.querySelectorAll('h2');
if (elems.length) { 
  for(var i=0; i<elems.length; i++){
    summaryList.push(elems[i].innerHTML);
  }
  console.log(summaryList);
}

*/
