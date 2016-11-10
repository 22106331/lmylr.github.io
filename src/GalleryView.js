import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
			  <Tab label="Tab One" value={0}/>
			  <Tab label="Tab Two" value={1} />
			  <Tab label="Tab Three" value={2} />
		  </Tabs>
		  <SwipeableViews
			  index={this.state.slideIndex}
			  onChangeIndex={this.handleChange} >
			  <view>
				<h2 >Tabs with slide effect</h2>
				Swipe to see the next slide.<br />
			  </view>
			  <view >
				slide n°2
			  </view>
			  <view >
				slide n°3
			  </view>
			</SwipeableViews>
		</view>
	</view>
    );
  }
}

export default GalleryView;