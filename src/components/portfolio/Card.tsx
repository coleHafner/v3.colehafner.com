import * as React from 'react';
import { Project } from '../../models';

export const Card: React.FunctionComponent<{project: Project}> = ({
	project,
}) =>
	<div className="panel">
		<h4 className="">{project.name}</h4>
		<a
			className="inner"
			href={project.url}
			target="_blank"
			style={{background: `url(${project.img}) left top`, backgroundSize: 'cover'}}>
			<div className="desc">{project.desc}</div>
		</a>
	</div>;