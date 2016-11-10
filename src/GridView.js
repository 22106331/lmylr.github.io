import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
				img: dir+'img-'+this.placeZero(i)+'-tn.jpg',
				title: this.placeZero(i),
				author: 'lmyooyo',
			});
		}
		return data;
	}
	
	render() {
    return (
		<div style={styles.root}>
			<GridList
				cols={3}
				padding={20}
				cellHeight={'100%'}
				style={styles.content}>
					{this.listImage(this.props.dir,this.props.size).map((tile) => (
						<GridTile
							key={tile.img}>
							<Card  style={styles.card}>
								<CardMedia >
									<img src={tile.img}/>
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