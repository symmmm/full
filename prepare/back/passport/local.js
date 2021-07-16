const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const {User}=require('../models')
const bcrypt = require('bcrypt')


module.exports = () => {
  passport.use(new LocalStrategy({
      usernameField = 'email', //레큐바디로간다
      passwordField = 'password'
    },
    async (email,password,done)=>{
        try{    const User = await User.findOne({
            where: {email}
        });
        if(!user){
        return done(null, false,{reason: '존재하지 않는 이메일 입니다.'}) //첫번째 서버에러 두번째 성공 세번째 클라이언트에러(보내는곳에서 잘못보냄)
        }
        const result = await bcrypt.compare(password, user.password);
        if(result){
            return done(null, user);
        }
        return done(null,false,{reason: '비밀번호가 틀렸습니다.'});

        } catch(error){
            console.error(error);
            return done(error);
        }

    }));
};
