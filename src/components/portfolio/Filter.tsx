import * as React from 'react';
import { debounce } from 'typescript-debounce-decorator';

interface State {
	filteredTags: string[];
	selectedTags: string[];
	term: string;
	selectedIndex: number;
	projects: [];
	showingTags: boolean;
}

interface Props {
	onFilterChange: Function;
	totalResults: number;
	tags: string[];
}

export default class Filter extends React.Component<Props, State> {
	textInputRef: any;

	constructor(props: any) {
		super(props);
		this.state = {
			selectedTags: [],
			filteredTags: [],
			term: '',
			selectedIndex: 0,
			projects: [],
			showingTags: false,
		};

		this.textInputRef = React.createRef();
	}

	removeTag(index: number): void {
		let selectedTags = this.state.selectedTags.slice(),
			filteredTags = this.state.filteredTags.slice();

		filteredTags.push(this.state.selectedTags[index]);
		selectedTags.splice(index, 1);
		filteredTags.sort();

		this.setState({
			selectedTags,
			filteredTags,
		});

		this.props.onFilterChange(selectedTags);
	}

	onFocus($event: any) {
		const term: string = $event.target.value || '';
		if (!term.length) {
			const newState: any = { showingTags: true };
			if (!this.state.filteredTags.length) {
				newState.filteredTags = this.props.tags.slice();
			}

			this.setState(newState);
		}
	}

	@debounce(100)
	onKeyUp($event: any): void {
		const keyPressed: string = $event.key;
		const term: string = $event.target.value || '';
		let filteredTags: string[] = [];

		switch (keyPressed) {
			case 'Escape':
				this.setState({showingTags: false});
				break;

			case 'ArrowDown':
			case 'ArrowUp':
				let selectedIndex: number = this.state.selectedIndex;
				const newState: any = {
					showingTags: true,
				};

				if (!term.length && !this.state.filteredTags.length) {
					newState.filteredTags = this.props.tags.slice();
				}

				switch ($event.key) {
					case 'ArrowDown':
						if (selectedIndex < (this.state.filteredTags.length - 1)) {
							selectedIndex++;
						}
						break;
					case 'ArrowUp':
						if (selectedIndex > 0) {
							selectedIndex--;
						}
						break;
				}

				newState.selectedIndex = selectedIndex;
				this.setState(newState);
				break;

			case 'Enter':
				this.addToSelected();
				break;

			default:
				if (keyPressed === 'Backspace' && this.state.term.length === 0) {
					this.removeTag(this.state.selectedTags.length - 1);
				}

				const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

				if (escapedTerm.length) {
					filteredTags = this.props.tags.filter((tag: string): boolean => {
						const regex: RegExp = new RegExp(escapedTerm, 'g');
						return regex.test(tag) && !this.state.selectedTags.includes(tag);
					});
				}

				this.setState({
					term,
					filteredTags,
					showingTags: true,
				});
				break;
		}
	}

	private addToSelected(clickIndex: any = null) {
		const index = clickIndex === null
			? this.state.selectedIndex
			: clickIndex;

		if (index >= 0) {
			let selectedTags = this.state.selectedTags.slice(),
				filteredTags = this.state.filteredTags.slice(),
				selectedIndex = this.state.selectedIndex;

			selectedTags.push(this.state.filteredTags[index]);
			filteredTags.splice(index, 1);

			// if you choose the last one on the list, shift the selected index to the new end of the list
			if (index === selectedIndex && selectedIndex > (filteredTags.length - 1)) {
				selectedIndex = (filteredTags.length - 1);
			}

			this.setState({
				selectedTags,
				filteredTags,
				selectedIndex,
				showingTags: true,
			});

			this.props.onFilterChange(selectedTags);
		}

		// focus back on the text input
		if (clickIndex !== null) {
			this.textInputRef.current.focus();
		}
	}

	render() {
		return (
			<div className="filters">
				<div className="result-count">
					{this.props.totalResults} result
					<span ng-show="ctrl.resultCount !== 1">s</span>
				</div>

				<div className="inner">

					{this.state.selectedTags.map((tag: string, i: number) => {
						return React.createElement('div', {}, React.createElement('a', {
							onClick: this.removeTag.bind(this, [i]),
							className: 'tag',
							href: '#',
							key: tag,
						},
							React.createElement('span', {}, `${tag}`),
						),
						);
					})}
					<input
						type="text"
						placeholder="Filter by tag"
						onKeyUp={e => this.onKeyUp(e)}
						onFocus={e => this.onFocus(e) }
						ref={this.textInputRef}
					/>
				</div>

				<div
					style={{ display: this.state.filteredTags.length > 0 && this.state.showingTags ? 'block' : 'none' }}
					className="auto-complete"
				>
					<ul>
						{this.state.filteredTags.map((tag: string, i: number) => {
							const className: string = this.state.selectedIndex === i ? 'active' : '';
							return React.createElement('li', { onClick: this.addToSelected.bind(this, i), className, key: tag }, `${tag}`);
						})}
					</ul>
				</div>

			</div>
		);
	}
}