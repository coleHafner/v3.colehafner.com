import * as React from 'react';
import { getTitle } from '../utils';

enum ProjectStatus {
	OpenSource,
	Proprietary,
}

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
			'CSS',
			'PHP',
			// 'GrassHopper CMS',
		],
		factoids: [
			'VueJS powered frontend built on top of a custom Node CMS',
			'Handled the entire customer experience, from sign in to checkout',
			'Implemented custom shipping algorithm with several shipping APIs',
			'Magento 2 eCommerce backend',
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
			'Javascript',
			'JSON',
			'VS Code',
			'Git',
		],
		factoids: [
			'React/Redux SPA written in Typescript',
			'Improved documentation and added onboarding and style guides',
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
			'Utility for automatic releases and asset uploads from CLI',
			'Prompts by default, but supports CLI mode for use with other scripts',
			'Well documented and easy to follow',
			'Accessible without install via NPX',
		],
	}, {
		name: 'nRF Cloud CI/CD',
		link: 'https://medium.com/@colehafner/setting-up-ci-cd-with-aws-codebuild-eec06137c680',
		desc: 'Automated versioning, testing, and deploy.',
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
			'Documented fully so it can be understood and maintained',
			'Built version detection, release script, and other utilities',
			'Successfully converted team to Angular commit convetion',
			'Restricted beta site to only whitelisted IPs',
			'Integrated headless E2E test suite',
		],
	}];

	// filter out skills
	let allSkills: string[] = [];

	projects.forEach(({ technologies }) => {
		allSkills = allSkills.concat(technologies);
	});

	const distinctSkills = Array.from(new Set(allSkills)).sort();

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
						<i className="fi-torso"></i>
						About
					</h4>
					<div className="sect objective">
						I am a seasoned web engineer with 10 years experience. 
						Throughout my career I have learned to work hard, learn fast, 
						and communicate clearly. I always leave things better than I 
						found them and would be a great addition to any team.
					</div>
				</div>

				<div className="sub">
					<h4>
						<i className="fi-dollar-bill"></i>
						Education
					</h4>
					<div className="sect objective">
						<div className="degree">Bachelors in CS</div>
						Southern Oregon University
					</div>
				</div>

				<div className="sub">
					<h4>
						<i className="fi-star"></i>
						Skills
					</h4>
					<div className="sect objective">
						{distinctSkills.join(', ')}
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
							@coleHafner
						</a>
					</div>

					<div className="sect">
						<a href="mailto:colehafner@gmail.com" target="_blank">
							<i className="fi-mail"></i>
							colehafner@gmail.com
						</a>
					</div>

					<div className="sect">
						<a href="https://github.com/colehafner" target="_blank">
							<i className="fi-social-github"></i>
							@coleHafner
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
									<a href={link} target="_blank" className="no-print">
										<i className="fi-web"></i>
										&nbsp;
									</a>
									<strong>{name}</strong>{' '}
									{desc}
									{status === ProjectStatus.OpenSource &&
										<div className="status-badge open-source">
											Open Source
										</div>
									}
								</h4>
								<ul className="factoids">
									{factoids.map(fact =>
										<li key={fact}>- {fact}</li>,
									)}
								</ul>
							</li>,
						)}
					</ul>
				</div>

				{/* <div className="sect">
					<h2>Skills</h2>
					{distinctSkills.join(', ')}
				</div> */}
			</div>
		</div>
	);
};