const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api", (req, res) => {
  res.send("hello api");
});

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, contemt: "hello" },
    { id: 2, contemt: "hello2" },
    { id: 3, contemt: "hello3" },
  ]);
});

app.post("/api/post", (req, res) => {
    res.json('작성완료');
});

app.delete("/api/post", (req, res) => {
    res.json('삭제완료');
});

app.listen(3065, () => {
  console.log("서버실행중");
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
