import React,{Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Main } from '../pages/Main';

import './app.css';
export const App = () =>{
        return(
                <div className="app"> 
                {/*Change me*/}
                <Router >
                        <Routes>
                                <Route path="/" exact element={<Main/>} />
                        </Routes>
                </Router>
        </div>
        );
}

export default  App;