const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');



async function download(url, filename){
    const writer = fs.createWriteStream(path.resolve(__dirname, filename));
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

(async ()=> {
    for (let i = 28; i >18; i--){
        let response = await axios.get('https://extrafabulouscomics.com/comic/1-' + i);
        const $ = cheerio.load(response.data);
        let src = $('#comic img').attr('src');
        console.log(src);
        let parts = src.split('/');
        await download(src, 'images/' + parts[parts.length - 1]);
    }
})();


