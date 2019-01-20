import React from 'react';
import List, {ListItem, ListItemText} from '@material/react-list';
import { Link } from 'gatsby';

export default (props) => (
  <List tag="nav" wrapFocus={true} {...props}>
    <ListItem tag={Link} to={`/`} shouldFocus tabIndex={1}>
      <ListItemText primaryText='Home'/>
    </ListItem>
    <ListItem tag={Link} to={`/profile`} shouldFocus tabIndex={2}>
      <ListItemText primaryText='Profile'/>
    </ListItem>
    <ListItem tag={Link} to={`/schedule`} shouldFocus tabIndex={3}>
      <ListItemText primaryText='Schedule'/>
    </ListItem>
    <ListItem tag={Link} to={`/work`} shouldFocus tabIndex={3}>
      <ListItemText primaryText='Work'/>
    </ListItem>
    <ListItem tag={Link} to={`/blog`} shouldFocus tabIndex={3}>
      <ListItemText primaryText='Blog'/>
    </ListItem>
  </List>
);