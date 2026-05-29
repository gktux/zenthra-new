const https = require('https');
const fs = require('fs');

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg/1024px-Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg.png';
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to fetch. Status Code: ${res.statusCode}`);
    return;
  }
  
  const file = fs.createWriteStream('./public/ataturk.png');
  res.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log('PNG downloaded successfully!');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
