import { useMemo } from "react";
import { Form, Input } from "antd";
import React from "react";

export default function NicknameEditForm() {
  const style = useMemo(() => ({ marginBottom: "20px", padding: "20px" }), []);
  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}
