import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from '@material/react-list';
import { Link } from 'gatsby';
import ReactScroll from 'react-scroll';

const protoTypes = {
  location: PropTypes.object.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  listClassName: PropTypes.string,
};

class TopLink extends React.Component {
  render() {
    const props = this.props;
    const p = Object.assign({}, props, {to: `/#${props.to}`});
    return (
      <Link {...p} />
    );
  }
}

class ScrollLink extends React.Component {
  render() {
    return (
      <ReactScroll.Link spy={false} smooth={true} duration={500} {...this.props} />
    );
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.closeDrawer();
  }
 
  render() {
    const { location, listClassName } = this.props;
    let TLink;
    if (location.pathname === "/") {
      TLink = ScrollLink;
    }
    else {
      TLink = TopLink;
    }
    return (
      <List tag="nav" wrapFocus={true} className={listClassName}>
        <ListItem tag={Link} to={`/`} shouldFocus tabIndex={1} onClick={this.onClick}>
          <ListItemText primaryText='Top'/>
        </ListItem>
        <ListItem tag={TLink} to={`section2`} shouldFocus tabIndex={2} onClick={this.onClick}>
          <ListItemText primaryText='Profile'/>
        </ListItem>
        <ListItem tag={TLink} to={`section3`} shouldFocus tabIndex={3} onClick={this.onClick}>
          <ListItemText primaryText='Schedule'/>
        </ListItem>
        <ListItem tag={TLink} to={`section4`} shouldFocus tabIndex={4} onClick={this.onClick}>
          <ListItemText primaryText='Work'/>
        </ListItem>
        <ListItem tag={Link} to={`/blog`} shouldFocus tabIndex={5} onClick={this.onClick}>
          <ListItemText primaryText='Blog'/>
        </ListItem>
      </List>
    );
  }
}

Nav.propTypes = protoTypes;

export default Nav;
