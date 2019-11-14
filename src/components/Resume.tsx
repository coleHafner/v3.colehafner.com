import * as React from 'react';
import { getTitle } from '../utils';

export const Resume: React.FunctionComponent = () => {
	React.useEffect(() => {
		const newTitle: string = getTitle('Resume');
		if (document.title !== newTitle) {
			document.title = newTitle;
		}

		const resumeClass: string = 'resume-wrapper';
		if (!document.body.classList.contains(resumeClass)) {
			document.body.classList.add(resumeClass);
		}

		// remove class from body on unmount
		return () => document.body.classList.remove(resumeClass);

	});

	const logoStyle = {
		background: 'url(images/logo.png) center center no-repeat',
		backgroundSize: '150px',
	};

	return (
		<div className="resume">
			<div className="sidebar">
				<div className="logo" style={logoStyle}>
					<span>CH</span>
				</div>

				<div className="name">
					<span className="first">Cole</span>
					<span className="last">Hafner</span>
					<h3>Web Engineer</h3>
				</div>

				<div className="sub">
					<h4>
						<i className="fi-arrow-right"></i>
						Objective
					</h4>
					<div className="sect objective">
						I am an expert full stack developer with a strong passion for clean, maintainable 
						web applications. I have bachelor’s degree in computer science and more than 7 years 
						experience in the web software field. Throughout my career, I have specialized in 
						creating 
					</div>
				</div>

				<div className="sub">
					<h4>
						<i className="fi-arrow-right"></i>
						Bio
					</h4>
					<div className="sect objective">
						I am an expert full stack developer with a strong passion for clean, maintainable 
						web applications. I have bachelor’s degree in computer science and more than 7 years 
						experience in the web software field. Throughout my career, I have specialized in 
						creating 
					</div>
				</div>

				<div className="sub">
					<h4>
						<i className="fi-arrow-right"></i>
						Contact
					</h4>
					<div className="sect">
						<a href="https://goo.gl/maps/ZdehXFb44Y7ZtLHv6" target="_blank">
							<i className="fi-marker"></i>
							Portland, OR
						</a>
					</div>

					<div className="sect">
						<a href="https://twitter.com/colehafner" target="_blank">
							<i className="fi-social-twitter"></i>
							@colehafner
						</a>
					</div>

					<div className="sect">
						<a href="mailto:colehafner@gmail.com" target="_blank">
							<i className="fi-mail"></i>
							colehafner@gmail.com
						</a>
					</div>

					<div className="sect">
						<a href="https://colehafner.com" target="_blank">
							<i className="fi-web"></i>
							colehafner.com
						</a>
					</div>
				</div>
				
			</div>

			<div className="content">
				<div className="sect">
					<h2>Experience</h2>

				</div>
			</div>
				
		</div>
	);
};
