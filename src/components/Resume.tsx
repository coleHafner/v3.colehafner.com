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
				<p>
					I am an expert full stack developer with a strong passion for clean, maintainable 
					web applications. I have bachelor’s degree in computer science and more than 7 years 
					experience in the web software field. Throughout my career, I have specialized in 
					creating clean and responsive applications for a variety of platforms. I have had
					many roles including ui/ux engineer, database architect, mentor, consultant, team 
					leader, and project manager. My goal is to join an organization that fosters 
					creativity and innovation, has room for growth and values a strong work/life balance. 
				</p>

				<h3>Qualifications</h3>
				<ul>
					<li>Expert in the LAMP stack/PHP, MySQL, CSS3, JavaScript, HTML5, and Git.</li>
					<li>Proven proficiency in AngularJS and client/server model project architecture.</li>
					<li>Strong track record of creating and maintaining large, well normalized, scalable databases.</li>
					<li>Skilled in creating cross platform responsive web apps using Ionic framework.</li>
					<li>Excellent communication skills. I love learning new things and working with people.</li>
				</ul>

				<h3>Skills</h3>
				<ul>
					<li><b>Client</b>: HTML, CSS, AngularJS, Foundation, Bootstrap, jQuery, jQueryUI, Highcharts, SASS, SCSS</li>
					<li><b>Server</b>: MVC, PHP, CakePHP, CodeIgniter, WordPress, Smarty Templates, MySQL, Node.js</li>
					<li><b>Software Tools</b>: Grunt, Bower, NPM, Composer, Vagrant, Git, HomeBrew, Apache</li>
					<li><b>Workflow Tools</b>: Pivotal Tracker, Bitbucket, Balsamiq, Slack, NetBeans, SourceTree, NaviCat</li>
					<li><b>Operating Systems/Other</b>: Mac OS, Linux, Windows, AWS EC2, AWS RDS, Terminal, SSH</li>
					<li><b>Services/APIs</b>: Facebook/Twitter Integrations, Google Maps/Analytics, custom integrations via SOAP/Curl. </li>
				</ul>

				<h3>Professional Experience</h3>

				<div className="exp">
					<div className="title"><span>Manifest Web Design - Senior Developer</span> | Beaverton, OR | Sep 2011 - Present</div>
					<ul>
						<li>Moved company away from local hosting solution to AWS (Amazon Web Services) EC2 instances/RDS DB. Added ease of management while increasing uptime and cutting company expenses.</li>
						<li>Optimized the code review/release workflow and cut release cycle time in half while reducing production bugs.</li>
						<li>Created company standard for  user permission/access control (now used on all projects).</li>
						<li>Headed up intern program and helped onboard and train new team members. </li>
					</ul>
				</div>

				<div className="exp">
					<div className="title"><span>Steelhead Advertising - Developer</span> | Ashland, OR | Aug 2008 - Sep 2011</div>
					<ul>
						<li>Created new wireframing process that improved client communication and decreased time to completion. </li>
						<li>Trained new developers on company coding standards.</li>
					</ul>
				</div>

				<div className="exp">
					<div className="title"><span>Blackstone Audiobooks - Intern</span> | Ashland, OR | April 2008 - June 2008</div>
					<ul>
						<li>Created inventory tracking database for company hardware.</li>
						<li>Assisted IT lead in rebuilding/expanding company servers.</li>
					</ul>
				</div>

				<h3>Education</h3> 
				<div className="exp">
					<div className="title"><span>B.S. Computer Science/BA Minor</span> | Southern Oregon University | Ashland, OR | May 2008</div>
				</div>

				<h3>References</h3>
				<div className="p">Available upon request.</div>

				<h3>Activities/Interests </h3>
				<div className="p">Spending time with my family, home remodeling, scuba, hiking, landscaping/yard work, basketball, and running.</div>
			</div>
		</div>
	);
};
