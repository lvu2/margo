import React, { useState, useEffect } from 'react';
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

function Play() {
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
	)
}

export default Play;
