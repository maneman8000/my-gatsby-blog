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
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  onDrawerClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <Drawer 
          modal
          open={this.state.open}
          onClose={this.onDrawerClose}
        >
          <DrawerContent>
            <Nav location={this.props.location} closeDrawer={this.onDrawerClose} />
          </DrawerContent>
        </Drawer>
        <Header location={this.props.location} onMenuClick={() => this.setState({open: !this.state.open})} />
      </div>
    )
  }
}

export default MyDrawer;