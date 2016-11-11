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
	width: '5%',
	height: '15%',
	maxWidth: 50,
	maxHeight: 120,
	cursor: 'pointer',
    position: 'absolute',
	top: '42%',
	left: 0,
	textAlign: 'center',
	color:'#fff',
	background: '#000000',
	filter:'alpha(opacity:30)',
	opacity:'0.3',
  },
  next: {
	width: '5%',
	height: '15%',
	maxWidth: 50,
	maxHeight: 120,
	cursor: 'pointer',
    position: 'absolute',
	top: '42%',
	right:0,
	textAlign: 'center',
	color:'#fff',
	background: '#000000',
	filter:'alpha(opacity:30)',
	opacity:'0.3',
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
		<div style={styles.preview} onClick={()=>this.preview()}>&lt;</div>
		<div style={styles.next} onClick={()=>this.next()}>&gt;</div>
		<img src={this.state.curUrl} style={styles.card}/>
      </div>
    );
  }
}

export default ImageViewer;