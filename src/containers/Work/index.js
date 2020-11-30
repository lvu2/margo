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
		<img className='top-img-banner' src={require('../../media/work/Margo-Weathers-Work-Masthead-v1.jpg')}>
		</img>
	);
}

class Work extends React.Component { 
	render() {
		return (
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
}

export default Work;


/////////////////////////////////////OLD///////////////////////////////////////
	/*<Container className="montage">
		<Row>
			{data.montage.img_list.map((data_item, i) => {
				return(
					<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
						{data_item.url.length > 0 &&
							<div style={{position: "relative"}}>
								<img src={require(`../../media/work/montage/${data_item.url}`)}>
								</img>
								<div className="image-info-container">
									<div className='image-info'></div>
								</div>
							</div>
						}
						{ data_item.link_class_name && 
							<div className={data_item.link_class_name}>
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="montage-header">{data_item.header_text}
											<div className="text-background">
												<div className="text-background-effect">
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

	<Container className="featured">
		<Row>
			{data.featured.img_list.map((data_item, i) => {
				return(
					<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
						{data_item.url.length > 0 &&
							<div style={{position: "relative"}}>
								<img src={require(`../../media/work/featured/${data_item.url}`)}>
								</img>
								<div className="image-info-container">
									<div className='image-info'></div>
								</div>
							</div>
						}
						{ data_item.link_class_name && 
							<div className={data_item.link_class_name}>
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="featured-header">{data_item.header_text}
											<div className="text-background">
												<div className="text-background-effect-right">
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

	<Container className="beauty">
		<Row>
			{data.beauty.img_list.map((data_item, i) => {
				return(
					<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
						{data_item.url.length > 0 &&
							<div style={{position: "relative"}}>
								<img src={require(`../../media/work/beauty/${data_item.url}`)}>
								</img>
								<div className="image-info-container">
									<div className='image-info'></div>
								</div>
							</div>
						}
						{ data_item.link_class_name && 
							<div className={data_item.link_class_name}>
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="beauty-header">{data_item.header_text}
											<div className="text-background">
												<div className="text-background-effect">
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

	<Container className="specialty">
		<Row>
			{data.specialty.img_list.map((data_item, i) => {
				return(
					<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
						{data_item.url.length > 0 &&
							<div style={{position: "relative"}}>
								<img src={require(`../../media/work/specialty/${data_item.url}`)}>
								</img>
								<div className="image-info-container">
									<div className='image-info'></div>
								</div>
							</div>
						}
						{ data_item.link_class_name && 
							<div className={data_item.link_class_name}>
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="specialty-header">{data_item.header_text}
											<div className="text-background">
												<div className="text-background-effect">
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

	<Container className="editorial">
		<Row>
			{data.editorial.img_list.map((data_item, i) => {
				return(
					<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
						{data_item.url.length > 0 &&
							<div style={{position: "relative"}}>
								<img src={require(`../../media/work/editorial/${data_item.url}`)}>
								</img>
								<div className="image-info-container">
									<div className='image-info'></div>
								</div>
							</div>
						}
						{ data_item.link_class_name && 
							<div className={data_item.link_class_name}>
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="editorial-header">{data_item.header_text}
											<div className="text-background">
												<div className="text-background-effect">
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

	<Container className="campaign">
		<Row>
			{data.campaign.img_list.map((data_item, i) => {
				return(
					<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
						{data_item.url.length > 0 &&
							<div style={{position: "relative"}}>
								<img src={require(`../../media/work/campaign/${data_item.url}`)}>
								</img>
								<div className="image-info-container">
									<div className='image-info'></div>
								</div>
							</div>
						}
						{ data_item.link_class_name && 
							<div className={data_item.link_class_name}>
								<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
									<span>
										<h2 className="campaign-header">{data_item.header_text}
											<div className="text-background">
												<div className="text-background-effect-right">
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
	</Container>*/



///////////////////////////////////OLDER//////////////////////////////////////

	/*<Container className="montage">
			<Row>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/montage/montage_01.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
						<div className="montagelink">
							<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
								<span>
									<h2 className="montage-header">MONTAGE
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

	<Container className="featured">
			<Row>
					<Col className="item" xs={12} sm={3} md={4}>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_01.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
						<div className="featuredlink">
							<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
								<span>
									<h2 className="featured-header">FEATURED
										<div className="text-background">
											<div className="text-background-effect-right">
											</div>
										</div>
									</h2>
								</span>
							</Link>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_02.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_03.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_07.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_04.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_05.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_06.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_08.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_09.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_10.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_11.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_12.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_13.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/featured/featured_14.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
			</Row>
	</Container>

	<Container className="beauty">
			<Row>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_01.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
						<div className="beautylink">
							<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
								<span>
									<h2 className="beauty-header">BEAUTY
										<div className="text-background">
											<div className="text-background-effect">
											</div>
										</div>
									</h2>
								</span>
							</Link>
						</div>
					</Col>
					<Col className="item" xs={12} sm={3} md={4}>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_02.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_03.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_04.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_05.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_06.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_07.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_08.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_09.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/beauty/beauty_10.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
			</Row>
	</Container>

	<Container className="specialty">
			<Row>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/specialty/specialty_01.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
						<div className="specialtylink">
							<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
								<span>
									<h2 className="specialty-header">SPECIALTY
										<div className="text-background">
											<div className="text-background-effect">
											</div>
										</div>
									</h2>
								</span>
							</Link>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/specialty/specialty_02.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/specialty/specialty_03.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/specialty/specialty_04.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/specialty/specialty_05.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/specialty/specialty_06.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
			</Row>
	</Container>

	<Container className="editorial">
			<Row>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/editorial/editorial_01.png')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
						<div className="editoriallink">
							<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
								<span>
									<h2 className="editorial-header">EDITORIAL
										<div className="text-background">
											<div className="text-background-effect">
											</div>
										</div>
									</h2>
								</span>
							</Link>
						</div>
					</Col>
					<Col className="item" xs={12} sm={3} md={4}>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/editorial/editorial_02.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/editorial/editorial_03.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/editorial/editorial_04.png')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/editorial/editorial_05.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/editorial/editorial_06.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

			</Row>
	</Container>

	<Container className="campaign">
			<Row>
					<Col className="item" xs={12} sm={3} md={4}>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_01.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
						<div className="campaignlink">
							<Link to ='/play' style={{ textDecoration: 'none', color: 'black' }}>
								<span>
									<h2 className="campaign-header">CAMPAIGN
										<div className="text-background">
											<div className="text-background-effect-right">
											</div>
										</div>
									</h2>
								</span>
							</Link>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_02.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_03.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

					<Col className="item" xs={12} sm={9} md={8}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_04.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_05.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_06.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_07.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>
					<Col className="item" xs={12} sm={6} md={4}>
						<div style={{position: "relative"}}>
							<img src={require('../../media/work/campaign/campaign_08.jpg')}>
							</img>
							<div className="image-info-container">
								<div className='image-info'></div>
							</div>
						</div>
					</Col>

			</Row>
	</Container>*/


