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

const tilesData = [
  {
    img: 'img/yaca/img-01-tn.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'img/yaca/img-02-tn.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'img/yaca/img-03-tn.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'img/yaca/img-04-tn.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'img/yaca/img-05-tn.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'img/yaca/img-06-tn.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'img/yaca/img-07-tn.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'img/yaca/img-09-tn.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/yaca/img-10-tn.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/yaca/img-11-tn.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/yaca/img-12-tn.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/yaca/img-13-tn.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/yaca/img-14-tn.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];
class GridView extends React.Component {
	render() {
    return (
		<div style={styles.root}>
			<GridList
				cols={3}
				padding={20}
				cellHeight={'100%'}
				style={styles.content}>
					{tilesData.map((tile) => (
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