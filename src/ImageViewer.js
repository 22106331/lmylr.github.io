import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  root: {
	position:'fixed',
  },
  content: {
	width: '100%',
	maxWidth: 'none',
  },
};

class ImageViewer extends React.Component {
  state = {
    open: false,
  };

  show = (dir, image) => {
    this.setState({open: true});
  };

  close = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="关闭"
        primary={true}
        onTouchTap={this.close}
      />,
    ];

    return (
      <div style={styles.root}>
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={styles.content}
          open={this.state.open}>
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}

export default ImageViewer;