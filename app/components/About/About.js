import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div id="about" style={{backgroundColor: theme.secondary}}>
           About
        </div>
    )
}

export default About