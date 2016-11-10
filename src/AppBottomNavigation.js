import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import AvVideoCall from 'material-ui/svg-icons/av/video-library';
import ImagePhoto from 'material-ui/svg-icons/image/photo';
import ActionInfo from 'material-ui/svg-icons/action/info';
import SwipeableViews from 'react-swipeable-views';
import MainView from './MainView';
import GalleryView from './GalleryView';
import VideoView from './VideoView';
import AboutView from './AboutView';

const indexIcon = <FontIcon className="material-icons"><ActionHome/></FontIcon>;
const galleryIcon = <FontIcon className="material-icons"><ImagePhoto/></FontIcon>;
const videoIcon = <FontIcon className="material-icons"><AvVideoCall/></FontIcon>;
const aboutIcon = <FontIcon className="material-icons"><ActionInfo/></FontIcon>;

const styles = {
  full:{
    height: '100%',
  },
  navigation:{
	position:'fixed',
	bottom:'0',
	left:'0',
	width:'100%',
  },
  fragment:{
	position:'absolute',
	width: '100%',
	height: '100%',
    paddingTop: 56,
    paddingBottom: 56,
	overflow: 'hidden',
	top:0,
	left:0,
  }
};

class AppBottomNavigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (value) => this.setState({selectedIndex: value,});
  
  handleChange = (value) => {
    this.setState({
      selectedIndex: value,
    });
  };

  render() {
    return (
	<view>
		<SwipeableViews
			style={styles.fragment}
			index={this.state.selectedIndex}
			onChangeIndex={this.handleChange} >
			<MainView/>
			<GalleryView/>
			<VideoView/>
			<AboutView/>
		</SwipeableViews>
		<Paper zDepth={1} style={styles.navigation}>
			<BottomNavigation 
				selectedIndex={this.state.selectedIndex} >
			  <BottomNavigationItem
				label="简介"
				icon={indexIcon}
				value={0}
				onTouchTap={() => this.select(0)}
			  />
			  <BottomNavigationItem
				label="相册"
				icon={galleryIcon}
				value={1}
				onTouchTap={() => this.select(1)}
			  />
			  <BottomNavigationItem
				label="视频"
				icon={videoIcon}
				value={2}
				onTouchTap={() => this.select(2)}
			  />
			  <BottomNavigationItem
				label="关于"
				icon={aboutIcon}
				value={3}
				onTouchTap={() => this.select(3)}
			  />
			</BottomNavigation>
		</Paper>
	</view>
    );
  }
}

export default AppBottomNavigation;