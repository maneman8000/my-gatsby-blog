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
      <Layout>
        <div className="container">
          <Grid>
            <Row>
              <Cell columns={6}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <Link css={linkCss} to={`/profile`}>
                      <h3 className="mdc-typography--headline6">Profile</h3>
                    </Link>
                  </CardPrimaryContent>
                </Card>
              </Cell>
              <Cell columns={6}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <Link css={linkCss} to={`/schedule`}>
                      <h3 className="mdc-typography--headline6">Schedule</h3>
                    </Link>
                  </CardPrimaryContent>
                </Card>
              </Cell>
            </Row>
            <Row>
              <Cell columns={6}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <Link css={linkCss} to={`/work`}>
                      <h3 className="mdc-typography--headline6">Work</h3>
                    </Link>
                  </CardPrimaryContent>
                </Card>
              </Cell>
              <Cell columns={6}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <Link css={linkCss} to={`/blog`}>
                      <h3 className="mdc-typography--headline6">Blog</h3>
                    </Link>
                  </CardPrimaryContent>
                </Card>
              </Cell>
            </Row>
            <Row>
              <Cell columns={6}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <a css={linkCss} href={`https://facebook.com`}>
                    <h3 className="mdc-typography--headline6"><i className="fab fa-facebook"></i> Facebook</h3>
                    </a>
                  </CardPrimaryContent>
                </Card>
              </Cell>
              <Cell columns={6}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <a css={linkCss} href={`https://twitter.com`}>
                    <h3 className="mdc-typography--headline6"><i className="fab fa-twitter"></i> Twitter</h3>
                    </a>
                  </CardPrimaryContent>
                </Card>
              </Cell>
            </Row>
            <Row>
              <Cell columns={12}>
                <Card css={cardCss}>
                  <CardPrimaryContent>
                    <a css={linkCss} href={`mailto:hoge@example.com`}>
                    <h3 className="mdc-typography--headline6"><MaterialIcon icon='mail_outline' /> Contact</h3>
                    </a>
                  </CardPrimaryContent>
                </Card>
              </Cell>
              </Row>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default Home;
