const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var masterList = [];

fs.readdirSync("_DROP_FOLDER/").forEach((file) => {
  //Print file name
  //console.log(file)

  const html = fs.readFileSync(
    "C:/Dev/Order-Day-Summary/_DROP_FOLDER/" + file,
    "utf8"
  );
  //  console.log(html);

  const dom = new JSDOM(html);

  // PER H2 ELEMENT

  let summaryList = [];
  let elems = dom.window.document.querySelectorAll("h2");

  if (elems.length) {
    for (let i = 0; i < 32; i++) {
      elems[i].innerHTML = elems[i].innerHTML.replace(" ⬜️", "⬜️");
      elems[i].innerHTML = elems[i].innerHTML.replace("  ", " ");
      elems[i].innerHTML = elems[i].innerHTML.replace("  ", " ");
      elems[i].innerHTML = elems[i].innerHTML.replace(
        " ⬜️ [A-1131B] ~Install Kit suit Icepack 2000-ES Unit BASE MOUNT",
        ""
      );
      elems[i].innerHTML = elems[i].innerHTML.replace(
        " ⬜️ [A-1111] ~Install Kit suit Icepack 2000-IC Unit",
        ""
      );
      elems[i].innerHTML = elems[i].innerHTML.replace(" ⬜️ Lid Bolt [x4]", "");
      elems[i].innerHTML = elems[i].innerHTML.replace(" ⬜️ 500mm ", "");
      elems[i].innerHTML = elems[i].innerHTML.replace("⬜️ 1500mm ", "");
      elems[i].innerHTML = elems[i].innerHTML.replace(
        "⬜️ [A-1040] Install Service Checklist ",
        ""
      );
      elems[i].innerHTML = elems[i].innerHTML.replace(
        "⬜️ [A-1058] Service Sheet ",
        ""
      );
      elems[i].innerHTML = elems[i].innerHTML.replace(
        "Items listed below will be sent ASAP:",
        ""
      );

      summaryList.push(elems[i].innerHTML);

      if (elems[i].innerHTML) {
        console.log(elems[i].innerHTML);
      }

      if (elems[i].innerHTML.toString()) {
        fs.appendFile(
          "summary.txt",
          elems[i].innerHTML.toString() + "\r\n",
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
