import React from 'react'
import Layout from '../components/Layout'
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from "@material/react-card";
import { css } from "@emotion/core"
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'gatsby';

const cardCss = css`
  margin: 24px 0;
`;

const linkCss = css`
  width: 100%;
  height: 160px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

class Home extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <section id="section1" className="section"><p>Section1</p></section>
        <section id="section2" className="section"><p>Section2</p></section>
        <section id="section3" className="section"><p>Section3</p></section>
        <section id="section4" className="section"><p>Section4</p></section>
     </Layout>
    )
  }
}

export default Home;
