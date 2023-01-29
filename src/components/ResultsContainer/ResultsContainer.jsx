import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((name) => {
        return <NameCard name={name} key={name} />
    });

    return (
        <div className='results-container'>
            {suggestedNamesJsx}
        </div>
    );
}

export default ResultsContainer;