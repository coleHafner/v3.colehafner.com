import * as React from 'react';
import { Card } from './Card';
import { Project } from '../../models';

export const Results: React.FunctionComponent<{
	projects: Project[]
}> = ({
	projects
}) =>
	<ul className="plist">
		{projects.map((project: Project) =>
			<li key={project.url}><Card project={project} /></li>,
		)}
	</ul>