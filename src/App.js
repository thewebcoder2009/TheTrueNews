import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
	pageSize = 6;
	apiKey = process.env.REACT_APP_NEWSWEBSITE

	state = {
		progress: 0
	}
	
	setProgress = (progress) => {
		this.setState({progress: progress})
	}
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<LoadingBar 
						height={4}
						color='#f11946'
						progress={this.state.progress}
					/>
					<Routes>
						<Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" title="home" category="general" />} />
						<Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" title="general" category="general" />} />
						<Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" title="health" category="health" />} />
						<Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" title="business" category="business" />} />
						<Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" title="sports" category="sports" />} />
						<Route exact path='/tech' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" title="technology" category="technology" />} />
					</Routes>
				</Router>
			</div>
		)
	}
}

