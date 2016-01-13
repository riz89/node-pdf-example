var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./simu.html', 'utf8')
var options = {
  format: 'A4',
  orientation: "landscape",
  // "header": {
  //   "height": "45mm",
  //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
  // },
  // "footer": {
  //   "height": "28mm",
  //   "contents": '<span style="color: #444; margin-right: 0px;">{{page}}</span>/<span>{{pages}}</span>'
  // },
  // phantomPath: './node_modules/.bin/phantomjs'
 };

pdf.create(html, options).toFile('./simu.pdf', function(err, res) {
 if (err) return console.log(err);
 console.log(res); // { filename: '/app/businesscard.pdf' }
});
