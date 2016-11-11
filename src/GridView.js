import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ImageViewer from './ImageViewer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardMedia} from 'material-ui/Card';/**CardActions, CardHeader, CardText */

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
	paddingTop: 20,
    justifyContent: 'space-around',
	overflow: 'hidden',
  },
  content: {
    width: 750,
    height: '100%',
	overflowY: 'auto',
	overflowX: 'hidden',
  },
  card: {
	  cursor: 'pointer',
	  paddingTop: 5,
	  paddingBottom: 10,
  },
};
	
class GridView extends React.Component {
	constructor(props) {
		super(props);
	};
	
	placeZero = (value)=>{
		return (''+value).length==1?('0'+value):value;
	}
	
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
	
	show = (dir, image) => {
		this.refs.dialog.show(dir, image);
	}
	
	render() {
    return (
		<div style={styles.root}>
			<ImageViewer ref='dialog'/>
			<GridList
				cols={3}
				padding={20}
				cellHeight={'100%'}
				style={styles.content}>
					{this.listImage(this.props.dir,this.props.size).map((image) => (
						<GridTile
							key={image.url}>
							<Card
								style={styles.card}
								onTouchTap={()=>this.show(this.props.dir, image.url)}>
								<CardMedia >
									<img src={image.url}/>
								</CardMedia>
							</Card>
						</GridTile>
					)
				)}
			</GridList>
		</div>
    );
  }
}

export default GridView;