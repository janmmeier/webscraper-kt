const axios = require('axios');
const cheerio = require('cheerio');

// axios.get('https://extrafabulouscomics.com/').then((response)=> {
//     const $ = cheerio.load(response.data);
//     console.log($('#comic img').attr('src'));
// });

(async ()=> {
    for (let i = 28; i >18; i--){
        let response = await axios.get('https://extrafabulouscomics.com/comic/1-' + i);
        const $ = cheerio.load(response.data);
        console.log($('#comic img').attr('src'));
    }


})();

