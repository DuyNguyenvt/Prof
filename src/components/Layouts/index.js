import React from "react";
import Header from "components/Header";

const withMainLayout = (Component) => {
  return (props) => {
    return (
      <>
        <Header {...props} />
        <Component {...props} />
      </>
    );
  };
};

export { withMainLayout };
