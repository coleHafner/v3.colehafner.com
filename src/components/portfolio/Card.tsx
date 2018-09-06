import * as React from 'react';

interface CardProps {
	description: string;
	externalLink: string;
	title: string;
	imageLink: string;
}

export default class Card extends React.Component<CardProps, {}> {
	render() {
		return (
			<div className="panel">
				<h4 className="">{this.props.title}</h4>
				<a
					className="inner"
					href={this.props.externalLink}
					target="_blank"
					style={{background: `url(${this.props.imageLink}) left top`, backgroundSize: 'cover'}}>
					<div className="desc">{this.props.description}</div>
				</a>
			</div>
		);
	}
}