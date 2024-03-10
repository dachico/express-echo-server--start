import express from "express";
import log from "@ajar/marker";
import morgan from "morgan";

const { PORT, HOST } = process.env;

// console.log(process.env);

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Hello Express!");
});

app.get("/users", (req, res, next) => {
  res.status(200).send("Get all Users");
});

// '/search?food=burger&town=ashdod'

app.get("/homepage", (req, res) => {
  res.status(200).send("This is my homepage");
});

app.get("/shows/:showID", (req, res) => {
  res.status(200).send(`<h1> Next show is ${req.params.showID}</h1>`);
});

app.use(express.json());

app.post("/shows", (req, res) => {
  const { showName, show } = req.body;
  res.status(200).json({ showName, message: `Show name is ${showName}` });
});

app.get("/api", (req, res) => {
  const dataRes = { message: "Response" };
  res.status(200).json(dataRes);
});

app.get("/hello", (req, res) => {
  const output = `<h1>Hello Express</h1>`;
  res.status(200).set("Content-Type", "text/html").send(output);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, HOST, () => {
  log.magenta(`🌎  listening on`, `http://${HOST}:${PORT}`);
});

//------------------------------------------
//         Express Echo Server
//------------------------------------------
/*
### Challenge instructions

1. Install the `morgan` 3rd party middleware  
use the middleware in your app:  
         `app.use( morgan('dev') );`

2.  Define more routing functions that use
    - `req.query` - access the querystring part of the request url
    - `req.params` - access dynamic parts of the url
    - `req.body` - access the request body of a **POST** request
        
        in each routing function you want to pass some values to the server from the client
        and echo those back in the server response

3. return api json response
4. return html markup response
5. return 404 status with a custom response to unsupported routes


*/
