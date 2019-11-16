import * as React from 'react';
import { getTitle } from '../utils';

enum ProjectStatus {
	OpenSource,
	Proprietary,
}

export const StatusBadge: React.FunctionComponent<{
	status: ProjectStatus,
}> = ({
	status,
}): JSX.Element => {
	return status === ProjectStatus.OpenSource
		? (
			<div className={status === ProjectStatus.OpenSource ? 'status-badge open-source' : 'status-badge'}>
				{status === ProjectStatus.OpenSource ? 'Open Source' : 'Closed'}
			</div>
		) : (
			<span></span>
		);
};

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

	const exps = [{
		start: '9/2018',
		end: 'current',
		company: 'Nordic Semiconductor',
		title: 'Senior R&D Engineer',
	}, {
		start: '8/2016',
		end: '9/2018',
		company: 'Solid Digital',
		title: 'Lead Frontend Developer',
	}, {
		start: '7/2011',
		end: '8/2016',
		company: 'Manifest Web Design',
		title: 'Fullstack Engineer',
	}];

	const projects = [{
		name: 'NiceRink',
		link: 'https://www.nicerink.com/rink-builder',
		desc: 'eCommerce site for buying DIY ice skating rinks.',
		status: ProjectStatus.Proprietary,
		type: 'site',
		technologies: [
			'VueJS',
			'Magento 2',
			'Node',
			'SASS',
			'GrassHopper CMS',
		],
		factoids: [
			'VueJS powered frontend built on top of a custom Node CMS',
			'Handled the entire customer experience, from sign in to checkout',
			'Magento 2 eCommerce backend',
			'Implemented custom shipping algorithm with several shipping APIs',
		],
	}, {
		name: 'nRF Cloud',
		link: 'https://nrfcloud.com',
		desc: 'IoT Platform that allows users to manage their fleet.',
		status: ProjectStatus.Proprietary,
		type: 'site',
		technologies: [
			'HTML',
			'MQTT',
			'React',
			'Redux',
			'SASS',
			'Typescript',
			'GraphQL',
			'Webpack',
		],
		factoids: [
			'React/Redux SPA written in Typescript',
			'Improved documentation and added onboarding guide and style guide',
			'Switched to Webpack, cut build times in half',
			'Successfully pitched team on E2E tests suite',
			'Integrated all kinds of IoT APIs',
		],
	}, {
		name: 'GitHub Release Utility',
		link: 'https://github.com/nRFCloud/github-release-util#nrfcloudgithub-release-util',
		desc: 'NPM CLI script',
		status: ProjectStatus.OpenSource,
		type: 'site',
		technologies: [
			'GitHub API',
			'Node',
			'CommanderJS',
			'NPM',
			'NPX',
			'Typescript',
		],
		factoids: [
			'Create new GitHub release and upload build assets (or don\'t) with one simple command',
			'Well documented and easy to follow',
			'Asks questions by default, but supports "single-command" mode for use with other scripts',
			'Accessible without install via NPX',
		],
	}, {
		name: 'nRF Cloud CI/CD',
		link: 'https://medium.com/@colehafner/setting-up-ci-cd-with-aws-codebuild-eec06137c680',
		desc: 'Automated versioning, testing, and deploy for nRF Cloud.',
		status: ProjectStatus.Proprietary,
		type: 'site',
		technologies: [
			'AWS CodeBuild',
			'GitHub API',
			'AWS S3',
			'YAML',
			'AWS CloudFront',
			'AWS WAF',
			'AWS CloudFormation',
		],
		factoids: [
			'Reduced complexity of deploy to nil. Just merge a PR!',
			'Fully documented process so it can be understood, improved, and maintained',
			'Built custom version detection, GitHub release script, and other utilities',
			'Successfully converted team to Angular commit convetion',
			'Fully locked down beta site to whitelisted IPs',
			'Integrated headless E2E test suite',
		],
	}];

	return (
		<div className="resume">
			<div className="sidebar">
				<div className="logo no-print" style={logoStyle}>
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

					<ul className="exp">
						{exps.map(({
							start,
							end,
							title,
							company,
						}) => {return (
							<li key={company}>
								<h4>
									<i>{start} - {end}</i>&nbsp;&nbsp;
									<strong>{company}&nbsp;&nbsp;</strong>
									{title}{' '}
								</h4>
							</li>
						)})}
					</ul>

				</div>
				<div className="sect">
					<h2 className="projects">Selected Projects</h2>

					<ul className="projects">
						{projects.map(({
							name,
							link,
							technologies,
							desc,
							status,
							type,
							factoids,
						}) =>
							<li>
								<h4>
									<strong>{name}</strong>{' '}
									{desc}
									<StatusBadge status={status} />
								</h4>
								<ul className="factoids">
									{factoids.map(fact =>
										<li key={fact}>{fact}</li>,
									)}
								</ul>
							</li>,
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};