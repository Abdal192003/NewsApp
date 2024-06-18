import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App () {

  const [progress,setProgress]=useState(0)

    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='general' category='general' />}></Route>
            <Route exact path="/entertainment" element={<News key='entertainment' setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' category='entertainment' />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='general' category='general' />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='business' category='business' />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='health'  category='health' />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='science'  category='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='sports'  category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey='c036596307d94ba29e9325720bae74a7' key='technology'  category='technology' />}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    )
}

