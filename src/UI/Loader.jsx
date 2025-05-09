import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loading-icon">
            <FaSpinner />
            </div>
        </div>
    );
};

export default Loader;