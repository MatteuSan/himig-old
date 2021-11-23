import React from 'react';

interface MSCTagProps {
    label?: string
}

const HCTag: React.FC<MSCTagProps> = ({ label, children }) => {
    return (
        <span className="hc-tag">
            { label || children }
        </span>
    );
};

export default HCTag;