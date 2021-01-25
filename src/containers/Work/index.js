import React, { useState, useEffect, useRef } from 'react';
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

const SideViewer = (props) => {
	return(
		<div className={(props.openviewer == "1") ? "side-viewer" : "side-viewer side-viewer-close" } /*style={{ transform: `scaleX(${props.openviewer})`}}*/>
			<div style={{ opacity: `${(props.openviewer == "1") ? 1: 0}`}}  onClick={props.handleViewerClick} className='x-button'>
				<div className='left-bar' />
				<div className='right-bar' />
			</div>
			<div className="viewer-image-container">
				<img style={{ opacity: `${(props.openviewer == "1") ? 1: 0}`, transition: `opacity ${(props.openviewer == "1") ? "1.0s": ".2s"} ease-in` }} src={require(`../../media/work/${props.url ? props.url : "featured/featured_01.jpg"}`)}/>
			</div>
			<div className="side-viewer-title"><h3>{props.imgText}</h3></div>
			<div className="side-viewer-home-text-container"><div className="side-viewer-home-text"><Link to ='/' style={{ textDecoration: 'none', color: 'white' }}>MARGO</Link></div></div>
		</div>
	);
}

function Work(props) {
	const scrollArr = [];
	const rowRef = useRef(null);

	const [ workState, setWorkState ] = useState({
		openViwer: false,
		viewerUrl: "featured/featured_01.jpg",
		text: ""
	});

	const handleViewerClick = (event) => {
		setWorkState({...workState,
					  openViwer: !workState.openViwer,
					  viewerUrl: event.currentTarget.getAttribute('url') ? event.currentTarget.getAttribute('url') : workState.viewerUrl,
					  text: event.currentTarget.getAttribute('imgtext') ? event.currentTarget.getAttribute('imgtext') : ""
					});
		console.log(rowRef);
	}

	useEffect(() => {
		props.handleBarsColor("white");
		window.scrollTo(0, 0);
        const debounce = ( func, wait = 20, immediate = true) => {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		}

        const checkSlide = () => {
        	scrollArr.forEach((scrollContainer)=> {
        		let tmp = scrollContainer.querySelector(".row");
        		if(!tmp)
        			return;
        		tmp.childNodes.forEach((containerEle) => {
        			containerEle.childNodes.forEach((ele) => {
	        			// let ele = containerEle.children[0];
	        			if(!ele)
	        				return;
	        			let transitionType = ele.getAttribute("scrolltransitiontype");
		        		if(!transitionType)
		        			return;

		        		let activateEle = transitionType === "text" ? ele.querySelector("h2") : ele;

		        		let eleYLoc = transitionType === "text" ? ele.querySelector("h2").offsetParent.offsetTop : ele.offsetParent.offsetTop;
		        		
		        		if(transitionType === "text")
		        			eleYLoc+= scrollContainer.offsetTop;

						// current position of scroll
						const slideInAt = window.pageYOffset + window.innerHeight;
						// bottom of the image
						// const imageBottom = activateEle.offsetTop + activateEle.children[0].offsetHeight;
						const isHalfShown = slideInAt > eleYLoc + activateEle.offsetHeight/4;
						const isNotScrolledPast = slideInAt < eleYLoc + activateEle.offsetHeight;

						if (isHalfShown /*&& isNotScrolledPast*/) {
							// console.log("add: ", activateEle);
							activateEle.classList.add('active');
						} else {
							//activateEle.classList.remove('active');
						}
					});
				});
			});
        }

        rowRef.current.childNodes.forEach((node) => {
        	scrollArr.push(node);
        });

     //    setTimeout(() => {
	    //     checkSlide();
	    // }, 100 );
        
        let myFunc = debounce(checkSlide, 20);
        window.addEventListener('scroll', myFunc);
        return () => window.removeEventListener('scroll', myFunc);
    }, [])

	return(
		<div>
			<div className='work'>
				<TopImgBanner />
				<div className="work-title-container">
					<div className="work-title">WORK</div>
				</div>
				<div className='work-home-link'>
					<Link to ='/' style={{ textDecoration: 'none', color: 'white' }}>
						MARGO
					</Link>
				</div>
			</div>

			<div ref={rowRef} className="work-container">
				{data.work_list.map((work_item, i) => {
					return(
						<Container key={work_item.name} className={work_item.name}>
							<Row>
								{work_item.img_list.map((data_item, i) => {
									return(
										<Col key={data_item.url} className="item" xs={data_item.xs} sm={data_item.sm} md={data_item.md}>
											{data_item.url.length > 0 &&
												<div className={"scroll-img-ele"} scrolltransitiontype="image" onClick={handleViewerClick} url={`${work_item.name}/${data_item.url}`} imgtext={data_item.info_top_text} style={{position: "relative"}}>
													<img src={require(`../../media/work/${work_item.name}/${data_item.url}`)}>
													</img>
													<div className="image-info-container">
														<div className='image-info'>
															<h4>{data_item.info_top_text}</h4>
															<p>{data_item.info_bottom_text}</p>
														</div>
													</div>
												</div>
											}
											{ data_item.link_class_name && 
												<div scrolltransitiontype="text" className={data_item.link_class_name}>
													<Link to ={`/work/${data_item.header_text}`} style={{ textDecoration: 'none', color: 'black' }}>
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
			<SideViewer handleViewerClick={handleViewerClick} imgText={workState.text} url={workState.viewerUrl} openviewer={ workState.openViwer ? '1' : '0' } />
		</div>

	);
}

export default Work;

