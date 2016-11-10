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
					<h2 >关于</h2>
					<div>
						<p >欢迎关注我的博客，后续作品不断上传中。</p>
						<p >本博客以及包含本人水印的所有原创作品版权归本人所有，如需使用请联系本人，否则视为侵权。如果博客作品中游侵权行为，欢迎联系本人予以删除。</p>
					</div>
				</div>
			</div>
		</view>
    );
  }
}

export default AboutView;