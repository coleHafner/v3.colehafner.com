import * as React from 'react';
import { Project } from '../../models';

interface Props {
	project: Project;
}

export default class Card extends React.Component<Props, {}> {
	render() {
		return (
			<div className="panel">
				<h4 className="">{this.props.project.name}</h4>
				<a
					className="inner"
					href={this.props.project.url}
					target="_blank"
					style={{background: `url(${this.props.project.img}) left top`, backgroundSize: 'cover'}}>
					<div className="desc">{this.props.project.desc}</div>
				</a>
			</div>
		);
	}
}