import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

export default class App extends Component {
	pageSize = 6;
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<Routes>
						<Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" title="home" category="general" />} />
						<Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country="in" title="general" category="general" />} />
						<Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" title="health" category="health" />} />
						<Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" title="business" category="business" />} />
						<Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" title="sports" category="sports" />} />
						<Route exact path='/tech' element={<News key="technology" pageSize={this.pageSize} country="in" title="technology" category="technology" />} />
					</Routes>
				</Router>
			</div>
		)
	}
}

