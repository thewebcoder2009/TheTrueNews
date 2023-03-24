import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
	let pageSize = 6;
	let apiKey = process.env.REACT_APP_NEWSWEBSITE

	const [initProgress, setProgress] = useState(0)
	
	return (
		<div>
			<Router>
				<Navbar />
				<LoadingBar 
					height={4}
					color='#f11946'
					progress={initProgress}
				/>
				<Routes>
					<Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" title="home" category="general" />} />
					<Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" title="health" category="health" />} />
					<Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" title="business" category="business" />} />
					<Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" title="sports" category="sports" />} />
					<Route exact path='/tech' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" title="technology" category="technology" />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App