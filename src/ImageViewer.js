import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  root: {
	  height: '100%',
	  width: '100%',
  },
  content: {
  },
  card: {
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
  icon:{
	marginTop: 'auto',
	marginBottom: 'auto',
  }
};

class ImageViewer extends React.Component {
	constructor(props) {
		super(props);
	};
	state = {
		curUrl: this.props.url,
		curIndex: (parseInt(this.props.index)-1),
	};
	placeZero = (value)=>{
		return (''+value).length==1?('0'+value):value;
	};
	
	preview = () =>{
		if(this.state.curIndex==0) return;
		this.setState({
		  curIndex: (this.state.curIndex-1),
		});
	};
	
	next = () =>{
		if(parseInt(this.state.curIndex)>=(parseInt(this.props.size)-1)) return;
		this.setState({
		  curIndex: (this.state.curIndex+1),
		});
	};
	
	listImage = (dir, size)=>{
		let data = [];
		for(var i= 1; i<=size; i++){
			data.push({
				url: dir+'img-'+this.placeZero(i)+'.jpg',
				index: this.placeZero(i),
				author: 'lmyooyo',
			});
		}
		return data;
	};
	
	handleChange = (value) => {
		this.setState({
		  curIndex: value,
		});
	};

  render() {
    return (
      <div style={styles.root}>
		<SwipeableViews
			index={this.state.curIndex}
			onChangeIndex={this.handleChange} >
			{this.listImage(this.props.dir,this.props.size).map((image) => (
				<img src={image.url} style={styles.card}/>
			))}
		</SwipeableViews>
		<div style={styles.preview} onTouchTap={()=>this.preview()}><div style={styles.icon}>&lt;</div></div>
		<div style={styles.next} onTouchTap={()=>this.next()}><div style={styles.icon}>&gt;</div></div>
      </div>
    );
  }
}

export default ImageViewer;