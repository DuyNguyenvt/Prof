import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "containers/App/components/header/injectable";
import Banner from "containers/App/components/banner";
import MainBody from "containers/App/components/mainBody";
import Footer from "containers/App/components/footer";

const Wrapper = styled.div`
  @media screen and (min-width: 700px) {
    .header-btn--menu {
      display: none;
    }
    .header-nav {
      justify-content: space-between !important;
    }
    .header-nav-list {
      transform: initial;
      display: initial;
      position: initial;
      width: initial;
      height: initial;
      background: initial;
      display: flex;
      flex-wrap: wrap;
      margin: initial;
      padding: initial;
      li {
        padding: 0 2rem;
        border: none;
        margin: 0;
      }
    }
    .pf-main--des {
      width: 80%;
    }
    .pf-main--card {
      flex-wrap: wrap;
      flex-direction: row;
      /* flex-wrap: wrap; */
      :nth-child(odd) .pf-main--des {
        order: 1;
        padding-left: 2rem;
      }
      :nth-child(even) .pf-main--des {
        order: 0;
        padding-right: 2rem;
      }
    }
    .pf-main--card-image {
      width: 20% !important;
      margin: initial;
    }
    .pf-footer--devider {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
    };
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Banner />
        <MainBody />
        <Footer />
      </Wrapper>
    );
  }
}

export default Portfolio;
