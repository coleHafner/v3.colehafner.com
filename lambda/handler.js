'use strict';

module.exports.hello = async (event, context) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			projects: [{
				name: 'Manifest Insights',
				img: 'images/manifestinsights.com.png',
				url: 'https://demo.manifestinsights.com/single/#6K8IQZ3Pd3',
				tags: ['angular', 'php', 'mysql', 'highcharts', 'html5', 'css', 'grunt', 'bower', 'composer'],
				desc: 'Dynamic graphing tool able to connect to any database and provide a simple, intuitive UI for creating data dashboards. Integrates with Google Analytics and Salesforce.',
				coolPoints: 1000,
				role: 'Early Team Member/Current Project Lead',
				visible: true

			}, {
				name: '24 Hour Estimates',
				img: 'images/24hourestimates.com.png',
				url: 'https://app.24hourestimates.com',
				tags: ['angular', 'php', 'mysql', 'html5', 'css', 'grunt', 'bower', 'composer', 'vagrant', 'TCPDF', 'sass'],
				desc: 'Utility to expedite the data entry of home inspection reports. Supports multiple user types and exports to PDF.',
				coolPoints: 300,
				role: 'Sole Contributor',
				visible: true
			}, {
				name: 'Win With Success',
				img: 'images/winwithsuccess.com.png',
				url: 'http://app.winwithsuccess.staging.manifestwebdesign.com',
				tags: ['angular', 'php', 'mysql', 'html5', 'css', 'grunt', 'bower', 'composer', 'vagrant', 'sass'],
				desc: 'Survey tool that helps companys determine their employee\'s perception of their brand.',
				coolPoints: 200,
				role: 'Project Lead',
				visible: true
			}, {
				name: 'Ecos Connect',
				img: 'images/ecosconnect.com.png',
				url: 'https://secure.ecosconnect.com',
				tags: ['angular', 'php', 'mysql', 'highcharts', 'html5', 'css', 'grunt', 'bower', 'composer', 'vagrant'],
				desc: 'Designed for the backflow testing industry, this app streamlines the workflow between backflow testing companies and water suppliers.',
				coolPoints: 800,
				role: 'Project Lead',
				visible: true
			}, {
				name: 'Engoso Analytics',
				img: 'images/ensogoanalytics.com.png',
				url: 'http://widgets.ensogoanalytics.com/demo',
				tags: ['jquery', 'html', 'css', 'CORS'],
				desc: 'Tool that analyzes and rates mutual funds based on their involvement/investment in fossil fuels. Deployable on any site with just a simple script tag. Fully customizable for each customer.',
				coolPoints: 700,
				role: 'Sole Contributor/Lead Developer',
				visible: true
			}, {
				name: 'Medipro Direct',
				img: 'images/mediprodirect.com.png',
				url: 'https://secure.mediprodirect.com',
				tags: ['jquery', 'php', 'html', 'css'],
				desc: 'Made for the life insurance industry, this app manages life insurance policies from start to finish.',
				coolPoints: 600,
				role: 'Team member turned Project Lead',
				visible: true
			}, {
				name: 'Quality First',
				img: 'images/qualityplacespolicies.com.png',
				url: 'https://secure.qualityplacespolicies.com',
				tags: ['jquery', 'php', 'html', 'css', 'angular', 'CORS', 'grunt'],
				desc: 'Sister site for MediPro that collects and analyzes data gathered via custom quality metrics email campaign.',
				coolPoints: 650,
				role: 'Project Lead',
				visible: true
			}, {
				name: 'Grubbable App',
				img: 'images/grubbable.com.png',
				url: 'https://play.google.com/store/apps/details?id=com.grubbable.GrubbableApp&hl=en',
				tags: ['angular', 'grunt', 'android', 'iOS', 'ionic', 'CORS', 'mobile', 'cross-platform', 'html5', 'css', 'sass'],
				desc: 'Restaraunt rating app for iOS and Android. Built with using Ionic mobile development framework.',
				coolPoints: 770,
				role: 'Team Member',
				visible: true
			}],
			input: event,
		}),
	};

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
