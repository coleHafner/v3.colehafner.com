import * as React from 'react';
import Card from './Card';
import { Project } from '../../models';

interface Props {
	projects: Project[];
}

export default class Results extends React.Component<Props, {}> {
	render() {
		return (
			<ul className="plist">
				{this.props.projects.map((project: Project) => {
					return <li key={project.url}><Card project={project} /></li>;
				})}
			</ul>
		);
	}
}