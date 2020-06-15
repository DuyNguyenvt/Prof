import React from "react";
import styled from "styled-components";
import MyProfile from "containers/App/components/myProfile";

const Wrapper = styled.div`
  .pf-page {
    transform: translate(-20px, 0px) scale(0.97);
    margin-bottom: -30px;
    width: 100vw;
    min-width: 1000px;
    height: calc(100vw * 297 / 210);
  }
`;

function ResumeReview() {
  return (
    <Wrapper>
      <MyProfile />
    </Wrapper>
  );
}

export default ResumeReview;
