import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const TopImgBanner = (props) => {
	return (
		<div className='top-featured-img-banner' style={{background: `${props.bannerColor}`}}>
		</div>
	);
}

const SideViewer = (props) => {
	return(
		<div className={(props.openviewer == "1") ? "side-viewer" : "side-viewer side-viewer-close" } /*style={{ transform: `scaleX(${props.openviewer})`}}*/>
			<div onClick={props.handleViewerClick} className='x-button' style={{ opacity: `${(props.openviewer == "1") ? 1: 0}`}}>
				<div className='left-bar' />
				<div className='right-bar' />
			</div>
			<div className="viewer-image-container">
				<img style={{ opacity: `${(props.openviewer == "1") ? 1: 0}`, transition: `opacity ${(props.openviewer == "1") ? "1.0s": ".2s"} ease-in` }} src={require(`../../media/work/${props.url ? props.url : "featured/featured_01.jpg"}`)}>
				</img>
			</div>
			<div className="side-viewer-title"><h3>{props.imgText}</h3></div>
			<div className="side-viewer-home-text-container"><div className="side-viewer-home-text"><Link to ='/' style={{ textDecoration: 'none', color: 'white' }}>MARGO</Link></div></div>
		</div>
	);
}

function Featured(props) {
	const scrollArr = [];
	const rowRef = useRef(null);

	const [ featuredState, setFeaturedState ] = useState({
		pageData: data[props.match.params.featured].play_list,
		pageName: props.match.params.featured.toLowerCase(),
		bannerColor: data[props.match.params.featured].banner_color,
		openViwer: false,
		viewerUrl: "featured/featured_01.jpg",
		text: ""
	});

	const handleViewerClick = (event) => {
		setFeaturedState({...featuredState,
					  openViwer: !featuredState.openViwer,
					  viewerUrl: event.currentTarget.getAttribute('url') ? event.currentTarget.getAttribute('url') : featuredState.viewerUrl,
					  text: event.currentTarget.getAttribute('imgtext') ? event.currentTarget.getAttribute('imgtext') : ""
					});
	}

	useEffect(() => {
		// setFeaturedState({...featuredState,
		// 					pageData: data[props.match.params.featured].play_list,
		// 					pageName: props.match.params.featured.toLowerCase()
		// 				});
		props.handleBarsColor("black");
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
        		scrollContainer.childNodes.forEach((containerEle) => {
        			let transitionType = containerEle.getAttribute("scrolltransitiontype");
	        		if(!transitionType)
	        			return;

	        		let activateEle = transitionType === "text" ? containerEle.querySelector("h2") : containerEle;

	        		let eleYLoc = transitionType === "text" ? containerEle.querySelector("h2").offsetParent.offsetTop : containerEle.offsetTop;
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

	return (
		<div>
			<div className='featured-page'>
				<TopImgBanner bannerColor={featuredState.bannerColor} />
				<div className='featured-title-container'>
					<div className='featured-title'>{`${featuredState.pageName.toUpperCase()}`}</div>
				</div>
				<div className='featured-home-link'>
					<Link to ='/' style={{ textDecoration: 'none', color: 'black' }}>
						MARGO
					</Link>
				</div>
			</div>

			<Container className="featured-container">
				<Row ref={rowRef}>
					{featuredState.pageData.map((play_item, i) => {
						return(
							<Col key={play_item.url} className={`item${play_item.item}`} xs={12} sm={7} md={6}>
								<div className={"scroll-img-ele"} scrolltransitiontype="image" onClick={handleViewerClick} url={`${featuredState.pageName}/${play_item.url}`} imgtext={play_item.text}  style={{position: "relative"}}>
									<img src={require(`../../media/work/${featuredState.pageName}/${play_item.url}`)}>
									</img>
									<div className="image-info-container">
										<div className='image-info'>
											<h4>{play_item.info_top_text}</h4>
											<p>{play_item.info_bottom_text}</p>
										</div>
									</div>
								</div>
								<div scrolltransitiontype="text" onClick={handleViewerClick} url={`${featuredState.pageName}/${play_item.url}`} imgtext={play_item.text}  className={`${play_item.name}-link`}>
									<div style={{ textDecoration: 'none', color: 'black' }}>
										<span>
											<h2 className={`${play_item.name}-header`}>{play_item.text}
												<div className="featured-text-background">
													<div className={`text-background-effect${play_item.effect}`}>
													</div>
												</div>
											</h2>
										</span>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
			<SideViewer handleViewerClick={handleViewerClick} imgText={featuredState.text} url={featuredState.viewerUrl} openviewer={ featuredState.openViwer ? '1' : '0' } />
		</div>
	)
}

export default Featured;
