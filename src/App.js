import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppBottomNavigation from './AppBottomNavigation';

injectTapEventPlugin();

const styles = {
  bar: {
	position:'fixed',
	top:'0',
	left:'0',
  },
};

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<view>
			<AppBar title="博客" style={styles.bar}/>
			<AppBottomNavigation />
		</view>
	</MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('app')
);