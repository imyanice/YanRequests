const fetch = require("node-fetch");
const fs = require("fs");
let n = 1;
let maxN = 2000;
let blagues = [];
for (n; n < maxN; n++) {
  fetch('https://blague.xyz/api/joke/random')
  .then(res => res.json())
  .then(json => {
     blagues.push(json.joke);
     console.log(json.joke);
     fs.writeFileSync('blagues.json', JSON.stringify(blagues, null, 2));
  });
}
