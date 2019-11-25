import React, { Fragment } from 'react';
import { Label, Menu, Button, Segment, Header, Icon } from 'semantic-ui-react';
import './NavBar.css';
import { MContext } from '../Util/Provider';

const NavBar = () => {
	return (
		<Fragment>
			<Menu vertical>
				<Segment raised>
					<Header as="h2">
						<Icon name="cog" />
						<Header.Content>Sorting Visualizer</Header.Content>
					</Header>
				</Segment>
			</Menu>
			<MContext.Consumer>
				{(context) => (
					<div>
						<Menu vertical>
							<Menu.Item name="generateArray" onClick={() => context.generateArray()}>
								<Button primary>Generate Random Array</Button>
							</Menu.Item>
							<Menu.Item
								name="mergeSort"
								onClick={() => context.setOption('mergeSort')}
								active={context.selected === 'mergeSort'}
							>
								MergeSort
								{context.selected === 'mergeSort' ? <Label color="red" content="Selected" /> : null}
							</Menu.Item>

							<Menu.Item
								name="spam"
								onClick={() => context.setOption('quickSort')}
								active={context.selected === 'quickSort'}
							>
								QuickSort
								{context.selected === 'quickSort' ? <Label color="red" content="Selected" /> : null}
							</Menu.Item>

							<Menu.Item
								name="heapSort"
								onClick={() => context.setOption('heapSort')}
								active={context.selected === 'HeapSort'}
							>
								HeapSort
								{context.selected === 'heapSort' ? <Label color="red" content="Selected" /> : null}
							</Menu.Item>
							<Menu.Item
								name="bubbleSort"
								onClick={() => context.setOption('bubbleSort')}
								active={context.selected === 'bubbleSort'}
							>
								BubbleSort
								{context.selected === 'bubbleSort' ? <Label color="red" content="Selected" /> : null}
							</Menu.Item>
							<Menu.Item>
								<Button onClick={() => context.sort()} color="red">
									SORT!
								</Button>
							</Menu.Item>
						</Menu>

						<Menu vertical>
							<Menu.Item>some slider</Menu.Item>
						</Menu>
					</div>
				)}
			</MContext.Consumer>
		</Fragment>
	);
};

export default NavBar;
