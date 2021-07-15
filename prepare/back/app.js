const express = require("express");
const postRouter = require("./routes/post");
const db = require("./models");
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error); 

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello api");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});
app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버실행중!!!");
});

// const server = http.createServer((req, res)=>{
//     console.log(req.url, req.method);
//     if(req.method === 'GET'){
//         if(req.url === '/api.posts'){

//         }
//     }else if(req.method === 'POST'){
//         if(req.url === '/api.posts'){

//         }

//     }else if (req.method === 'DELETE'){
//         if(req.url === '/api.posts'){

//         }

//     }
