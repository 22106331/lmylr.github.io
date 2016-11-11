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
};

class ImageViewer extends React.Component {
	constructor(props) {
		super(props);
	};
  
  listImage = (dir, size)=>{
		let data = [];
		for(var i= 1; i<=size; i++){
			data.push({
				url: dir+'img-'+this.placeZero(i)+'-tn.jpg',
				title: this.placeZero(i),
				author: 'lmyooyo',
			});
		}
		return data;
	}

  render() {
    return (
      <div style={styles.root}>
		<img src={this.props.url} style={styles.card}/>
      </div>
    );
  }
}

export default ImageViewer;