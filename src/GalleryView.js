import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import GridView from './GridView';

const styles = {
  root:{
	width: '100%',
	height: '100%',
    position: 'absolute',
	color: '#ffffff',
  },
  bg: {
  },
  content:{
	width: '100%',
	textAlign: 'center',
	left: 0,
	top: 0,
    position: 'absolute',
  },
};

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
	<view style={styles.root}>
	  <img width='100%' src='./img/bg-gallery.jpg' style={styles.bg} />
	  <view style={styles.content}>
		  <Tabs
			value={this.state.slideIndex}
			onChange={this.handleChange} >
			  <Tab label="广州YACA漫展" value={0}/>
			  <Tab label="越秀公园" value={1} />
		  </Tabs>
		  <SwipeableViews
			  index={this.state.slideIndex}
			  onChangeIndex={this.handleChange} >
			  <GridView/>
			  <GridView/>
			</SwipeableViews>
		</view>
	</view>
    );
  }
}

export default GalleryView;