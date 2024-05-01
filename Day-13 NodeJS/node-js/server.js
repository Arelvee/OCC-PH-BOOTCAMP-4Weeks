// Import the HTTP module
const http = require("http");
// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;
// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a 200 status
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Send the response body
  res.end("Hello, World");
});
// Listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});