import React from 'react';
import Drawer, {DrawerContent} from '@material/react-drawer';
import Header from './Header';
import Nav from './Nav';

class MyDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.onClose = this.onClose.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open});
  }

  onClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <Drawer 
          modal
          open={this.state.open}
          onClose={this.onClose}
        >
          <DrawerContent>
            <Nav location={this.props.location} tabIndex={10} closeDrawer={this.onClose} />
          </DrawerContent>
        </Drawer>
        <Header location={this.props.location} onMenuClick={this.toggleDrawer} />
      </div>
    )
  }
}

export default MyDrawer;