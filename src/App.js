import React from 'react';
import './App.css';
import { Provider } from './components/Util/Provider';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import NavBar from './components/NavBar/NavBar';
import { Container, Grid, Segment } from 'semantic-ui-react';

function App() {
	return (
		<div className="App">
			<Provider>
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column style={{ padding: 0, margin: '0 0 0 auto' }} width={3}>
								<NavBar />
							</Grid.Column>
							<Grid.Column style={{ padding: 0, margin: '0 auto 0 0' }} width={12}>
								<Segment raised>
									<SortingVisualizer />
								</Segment>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Provider>
		</div>
	);
}

export default App;
