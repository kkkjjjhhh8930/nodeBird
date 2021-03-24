import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <lable htmlFor="user-id">아이디</lable>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <lable htmlFor="user-password">비밀번호</lable>
        <br />
        <Input
          name="user-id"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입하기</a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
