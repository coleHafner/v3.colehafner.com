export interface Project {
	name: string;
	img: string;
	url: string;
	tags: string[];
	desc: string;
	coolPoints: number;
	role: string;
	visible: boolean;
}

export const getTitle = (page: string) => `${page} | colehafner.com`;