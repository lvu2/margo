import React, { useState, useEffect, useRef } from 'react';
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

function Home(props) {
	const scrollArr = [];
	const rowRef = useRef(null);

	const [ state, setState ] = useState({
		error: null,
		isLoaded: false,
		items: []
	});

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
        		let itemEle = scrollContainer.querySelector('.item');
        		itemEle.childNodes.forEach((containerEle) => {
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
		<div className='home'>
			<TopVideoContainer/>
			<div className='home-title-container'>
				<div className='margo-title'>MARGO</div>
			</div>
			
			<div ref={rowRef} className="home-container">
				<Container className="work-link-container">
					<Row>
						<Col className="item" xs={12} sm={9} md={8}>
							<img className={"scroll-img-ele"} scrolltransitiontype="image" src={require('../../media/main/Margo-Weathers-Work-Photography-Landing-ThumbnailDS.png')}>
							</img>
							<div scrolltransitiontype="text" className="work-link">
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
							<img className={"scroll-img-ele"} scrolltransitiontype="image" src={require('../../media/main/Margo-Weathers-Play-Collage-Legacy-The-Film-Thumbnail.png')}>
							</img>
							<div scrolltransitiontype="text" className="play-link">
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





























