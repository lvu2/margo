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
		<img className='top-img-banner' src={require('../../media/work/Margo-Weathers-Work-Masthead-v1.jpg')}>
		</img>
	);
}

function Work() {
	return(
		<div>
			<div className='work'>
				<TopImgBanner />
				<div className='work-home-link'>
					<Link to ='/' style={{ textDecoration: 'none', color: 'white' }}>
						MARGO
					</Link>
				</div>
				<div className="work-title">WORK</div>
			</div>

			<div className="work-container">
				{data.work_list.map((work_item, i) => {
					return(
						<Container key={work_item.name} className={work_item.name}>
							<Row>
								{work_item.img_list.map((data_item, i) => {
									return(
										<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
											{data_item.url.length > 0 &&
												<div style={{position: "relative"}}>
													<img src={require(`../../media/work/${work_item.name}/${data_item.url}`)}>
													</img>
													<div className="image-info-container">
														<div className='image-info'>
															<h3>{data_item.info_top_text}</h3>
															<h5>{data_item.info_bottom_text}</h5>
														</div>
													</div>
												</div>
											}
											{ data_item.link_class_name && 
												<div className={data_item.link_class_name}>
													<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
														<span>
															<h2 className={`${work_item.name}-header`}>{data_item.header_text}
																<div className="text-background">
																	<div className={`text-background-effect${data_item.effect}`}>
																	</div>
																</div>
															</h2>
														</span>
													</Link>
												</div>
											}
										</Col>
									)
								})}
							</Row>
						</Container>
					)
				})}
		
			</div>
		</div>

	);
}

export default Work;

