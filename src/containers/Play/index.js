import React from 'react';
import './index.scss';
import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const TopImgBanner = () => {
	return (
		<img className='top-play-img-banner' src={require('../../media/play/Margo-Weathers-Play-Masthead-2.jpg')}>
		</img>
	);
}

class Play extends React.Component { 
	render() {
		return (
			<div>
				<div className='play'>
					<TopImgBanner />
					<div className='play-home-link'>
						<Link to ='/' style={{ textDecoration: 'none', color: 'white' }}>
							MARGO
						</Link>
					</div>
					<div className='play-title'>PLAY</div>
				</div>

				<Container className="play-container">
					<Row>
						{data.play_list.map((play_item, i) => {
							return(
								<Col key={play_item.url} className={`item${play_item.item}`} xs={12} sm={7} md={6}>
									<div style={{position: "relative"}}>
										<img src={require(`../../media/play/${play_item.url}`)}>
										</img>
										<div className="image-info-container">
											<div className='image-info'>
												<h3>{play_item.info_top_text}</h3>
												<h5>{play_item.info_bottom_text}</h5>
											</div>
										</div>
									</div>
									<div className={`${play_item.name}-link`}>
										<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
											<span>
												<h2 className={`${play_item.name}-header`}>{play_item.text}
													<div className="play-text-background">
														<div className={`text-background-effect${play_item.effect}`}>
														</div>
													</div>
												</h2>
											</span>
										</Link>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Play;

						/*<Col className="item" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_01.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="quite-an-eye-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="quite-an-eye-header">QUITE AN EYE
											<div className="play-text-background">
												<div className="text-background-effect">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item-left" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_02.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="house-call-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="house-call-header">HOUSE CALL
											<div className="play-text-background">
												<div className="text-background-effect-right">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_03.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="make-cake-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="make-cake-header">MAKE CAKE
											<div className="play-text-background">
												<div className="text-background-effect">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item-left" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_04.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="argh-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="argh-header">ARGH
											<div className="play-text-background">
												<div className="text-background-effect-right">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_05.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="in-the-cards-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="in-the-cards-header">IN THE CARDS
											<div className="play-text-background">
												<div className="text-background-effect">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item-left" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_06.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="gifted-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="gifted-header">GIFTED
											<div className="play-text-background">
												<div className="text-background-effect-right">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_07.png')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="homeface-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="homeface-header">HOMEFACE
											<div className="play-text-background">
												<div className="text-background-effect">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item-left" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_08.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="woody-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="woody-header">WOODY
											<div className="play-text-background">
												<div className="text-background-effect-right">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_09.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="branch-out-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="branch-out-header">BRANCH OUT
											<div className="play-text-background">
												<div className="text-background-effect">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>

						<Col className="item-left" xs={12} sm={7} md={6}>
							<img src={require('../../media/play/play_10.png')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
							<div className="books-link">
								<Link to ='/work' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="books-header">BOOKS
											<div className="play-text-background">
												<div className="text-background-effect-right">
												</div>
											</div>
										</h2>
									</span>
								</Link>
							</div>
						</Col>*/
