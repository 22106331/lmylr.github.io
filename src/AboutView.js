import React from 'react';

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
	padding: 16,
	paddingTop: 100,
    position: 'absolute',
  },
  pager: {
	padding: 16,
  },
};

class AboutView extends React.Component {

  render() {
    return (
		<view style={styles.root}>
			<img width='100%' src='./img/bg-about.jpg' style={styles.bg} />
			<div style={styles.content}>
				<div style={styles.pager} >
					<h2 >联系作者</h2>
					<div>
                        <p >QQ:425078310</p>
                        <p >Email:<a href="mailto:lmyooyo@gmail.com">lmyooyo@gmail.com</a></p>
					</div>
				</div>
			</div>
		</view>
    );
  }
}

export default AboutView;