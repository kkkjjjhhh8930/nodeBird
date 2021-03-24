import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const signUp = () => {
  return (
    <AppLayout>
      <Head>
        <title>| NodeBird</title>
      </Head>
      <div>가입하기 페이지 </div>
    </AppLayout>
  );
};

export default signUp;
