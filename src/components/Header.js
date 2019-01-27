import React from 'react'
import { css } from "@emotion/core"
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import Nav from './Nav';
import img from '../../content/assets/home-bg.jpg';

export default ({onMenuClick}) => (
  <header className="mdc-toolbar">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        <IconButton onClick={onMenuClick} className="drawer-menu">
          <MaterialIcon icon="menu" />
        </IconButton>
        <Nav className="header-nav" />
        <span className="mdc-toolbar__title"></span>
      </section>
      <section className="mdc-toolbar__section mdc-toolbar__section--align-end"   role="toolbar">
        <IconButton isLink href="#">
          <i className="fab fa-facebook"></i>
        </IconButton>
        <IconButton isLink href="#">
          <i className="fab fa-twitter"></i>
        </IconButton>
        <IconButton isLink href="mailto:hogehoge@example.com">
          <MaterialIcon icon='mail_outline' />
        </IconButton>
     </section>
    </div>
    <div css={css`
      position: relative;
      background: no-repeat center center;
      background-size: cover;
      background-image: url('${img}');
      height: 420px;
    `}>
      <div css={css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #cccccc;
        opacity: .5;
      `}>
      </div>
      <div css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 162px 0;
      `}>
        <h1 className="mdc-typography--headline1" css={css`
          color: #C45E6C;
        `}>テストサイト</h1>
      </div>
    </div>
  </header>
)
