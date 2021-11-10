"use strict";

const express = require("express");

//Constants
const PORT = 8080;
const HOST = "0.0.0.0";

//App
const app = express();
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,access_token"
  );

  //intercept OPTIONS method
  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "secret",
  database: "test",
});

//データの取得
app.get("/api/todos", (req, res, next) => {
  //なかったらテーブルを作る
  var sql = "CREATE TABLE IF NOT EXISTS todos (content VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) {
      res.send(err);
      throw err;
    }
    console.log("Table created");
  });

  connection.query("SELECT * FROM todos", function (error, result, fields) {
    if (error) {
      res.send(error);
      throw error;
    }
    res.send(result);
  });
});

//Todoの新規登録
app.post("/api/todos", (req, res, next) => {
  const { content } = req.body;
  if (typeof content !== "string" || !title) {
    //contentがリクエストに含まれない場合はステータスコード400
    const err = new Error("content is required");
    err.statusCode = 400;
    return next(err);
  }
  //Todoの登録
  connection.connect(function (err) {
    if (err) {
      res.send(err);
      throw err;
    }
    console.log("Connected!");
  });
  connection.query(
    `INSERT INTO todos VALUES ${content}`,
    function (error, results, fields) {
      if (error) {
        res.send(error);
        throw error;
      }
      connection.end();
    }
  );
  c;
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
