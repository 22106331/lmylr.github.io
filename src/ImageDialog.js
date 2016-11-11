import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ImageViewer from './ImageViewer';
import {Card, CardTitle, CardMedia} from 'material-ui/Card';

const styles = {
  root: {
	position:'fixed',
  },
  content: {
	position:'fixed',
	top:0,
	padding:2,
	paddingRight: 7,
	width: '100%',
	maxWidth: 'none',
	textAlign: 'center',
  },
  card: {
	  display: 'inline-block',
	  height: 'auto',
	  width: 'auto',
	  maxWidth: '100%',
	  maxHeight: '100%',
  },
  body: {
	  paddingTop: 10,
	  paddingLeft: 0,
	  paddingRight: 0,
  },
};

class ImageDialog extends React.Component {
  state = {
    open: false,
	imageUrl: '',
	imageDir: '',
	imageSize: 0,
  };

  show = (index, dir, size) => {
    this.setState(
	{open: true,
	 imageIndex:index,
	 imageUrl:dir+'img-'+index+'.jpg',
	 imageDir:dir,
	 imageSize:size});
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
      />,];

    return (
      <div style={styles.root}>
        <Dialog
          actions={actions}
          modal={false}
          contentStyle={styles.content}
          style={styles.content}
          bodyStyle={styles.body}
          open={this.state.open}
		  onRequestClose={this.close}>
			<ImageViewer
				url={this.state.imageUrl}
				dir={this.state.imageDir}
				index={this.state.imageIndex}
				size={this.state.imageSize}/>
        </Dialog>
      </div>
    );
  }
}

export default ImageDialog;