const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");

const router = express.Router();

// -----------------------로그인-----------------------
router.post("/login", (req, res, next) => { //미들웨어 확장
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if(info){
      return res.status(401).send(info.reason); // 401:허가되지않음
    }
    return req.login(uesr.async(loginerr))
  })(req, res, next);
});

//---------------------회원가입-----------------------------
router.post("/", async (req, res, next) => {
  // POST/user
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin','http://localhost:3060') cors 안쓸때
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error); //status 500
  }
});
module.exports = router;
