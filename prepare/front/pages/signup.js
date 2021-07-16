import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import { useCallback, useState, useEffect } from "react";
import Router from "next/router";
import LoginForm from "../components/LoginForm";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { SIGN_UP_REQUEST,SIGN_UP_RESET } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (signUpDone) {
      Router.push("/");
    }
  }, [signUpDone]); //회원가입완료되면 홈페이지로 돌아가게 만들기

  useEffect(() => {
    if (signUpDone) {
      dispatch({
        type: SIGN_UP_RESET,
      });
    }
  }, []); //회원가입 완료후 다시 회원가입 페이지 못가는거 막아줌

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useInput("");
  const [password, onChangepassword] = useInput("");
  const [nickname, onChangenickname] = useInput("");
  const [passwordCheck, setpasswordCheck] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState("");

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onChangepasswordCheck = useCallback(
    (e) => {
      setpasswordCheck(e.target.value);
      setpasswordError(e.target.value !== password);
    },
    [password]
  );

  const onsubmit = useCallback(() => {
    //버튼을 누르면 데이터가 사가로 넘어감
    if (password !== passwordCheck) {
      return setpasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Form onFinish={onsubmit}>
        회원가입 페이지
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            required
            onChange={onChangepassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangepasswordCheck}
          />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangenickname}
          />
          {passwordError && <ErrorMessage>비밀번호 확인 불일치</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            동의합니다.
          </Checkbox>
          {termError && <div style={{ color: "red" }}>동의하세요</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Signup;
