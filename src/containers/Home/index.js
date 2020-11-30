import React, { useState, useEffect } from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const TopVideoContainer = () => {
	return (
		<video className='top-video-container' autoPlay loop muted src={require('../../media/main/651752178.mp4')}></video>
	)
}

function Home() {
	const [ state, setState ] = useState({
		error: null,
		isLoaded: false,
		items: []
	});

	return (
		<div className='home'>
			<TopVideoContainer/>
			<div className='margo-title'>MARGO</div>
			
			<div className="home-container">
				<Container className="work-link-container">
					<Row>
						<Col className="item" xs={12} sm={9} md={8}>
							<img src={require('../../media/main/Margo-Weathers-Work-Photography-Landing-ThumbnailDS.png')}>
							</img>
							<div className="work-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="work-header">WORK
											<div className="text-background">
												<div className="text-background-effect">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
				<Container className="play-link-container">
					<Row>
						<Col className="item" xs={12} sm={{ span: 8, offset: 4 }} md={{ span: 6, offset: 6}}>
							<img src={require('../../media/main/Margo-Weathers-Play-Collage-Legacy-The-Film-Thumbnail.png')}>
							</img>
							<div className="play-link">
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="play-header">PLAY
											<div className="text-background">
												<div className="text-background-effect-right">
												</div>
											</div>
										</h2>
										
									</span>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Home;





























