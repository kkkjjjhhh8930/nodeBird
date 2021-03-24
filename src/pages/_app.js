import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import PropTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </div>
  );
};
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
