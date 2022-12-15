
const http = require("http"),
  fs = require("fs");
var url = require("url");
const port = 8000;

// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(8000);
// });

const user = [
  {
    name: "John",
    number: 1,
  },
  {
    name: "John",
    number: 2,
    
  },
  {
    name: "Ben",
    number: 3,
    
  },
  {
    name: "Garry",
    number: 4,
    
  },
];

const playlist = [
    {
        name: "Her Loss",
        url : "https://github.com/Geto1-creator/Team"
      },
      {
        name: "New Era",
        url : "https://github.com/Geto1-creator/Team"
      },
      {
        name: "Hello",
        url : "https://github.com/Geto1-creator/Team"
      },
      {
        name: "BS",
        url : "https://github.com/Geto1-creator/Team"
      },
]

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  
  const queryObject = url.parse(request.url, true).pathname;

if(queryObject == '/') {
    response.setHeader("Content-Type", "text/plain");
    response.end('Home')
}
if(queryObject == '/playlists') {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(playlist));
}
if(queryObject == '/users') {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(user));
}
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
