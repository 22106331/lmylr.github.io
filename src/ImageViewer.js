import React from 'react';

const styles = {
  root: {
  },
  content: {
  },
  card: {
	  display: 'inline-block',
	  height: 'auto',
	  width: 'auto',
	  maxWidth: '100%',
	  maxHeight: '100%',
  },
  preview: {
    position: 'absolute',
	top: '50%',
	left: 0,
  },
  next: {
    position: 'absolute',
	top: '50%',
	right:0,
  },
};

class ImageViewer extends React.Component {
	constructor(props) {
		super(props);
	};
	state = {
		curUrl: this.props.url,
		curIndex: parseInt(this.props.index),
	};
	placeZero = (value)=>{
		return (''+value).length==1?('0'+value):value;
	};
	
	preview = () =>{
		if(this.state.curIndex==1) return;
		this.setState(
		{curUrl: this.props.dir+'img-'+this.placeZero((this.state.curIndex-1))+'.jpg',
		curIndex: (this.state.curIndex-1),});
	};
	
	next = () =>{
		if(parseInt(this.state.curIndex)>=parseInt(this.props.size)) return;
		this.setState(
		{curUrl: this.props.dir+'img-'+this.placeZero(parseInt(this.state.curIndex)+1)+'.jpg',
		curIndex: (parseInt(this.state.curIndex)+1),});
	};

  render() {
    return (
      <div style={styles.root}>
		<button style={styles.preview} onClick={()=>this.preview()}>上一张</button>
		<button style={styles.next} onClick={()=>this.next()}>下一张</button>
		<img src={this.state.curUrl} style={styles.card}/>
      </div>
    );
  }
}

export default ImageViewer;