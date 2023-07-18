import React,{Suspense} from 'react';

// This will fix Invalid HookCall error.
import Landing from '../components/Landing/Landing';

//Uncomment this to see Invalid hook call error
//import {Landing} from '../components';
const About = React.lazy(() => import('../components/About/About'));

export const Main = () =>{
    return(<>
                <Landing/>
                <About/>
        </>);
}