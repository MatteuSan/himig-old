import React from 'react';

interface HCTitleBarProps {
    title?: string;
    icon?: string;
}

const HCTitleBar: React.FC<HCTitleBarProps> = ({ title, icon, children }) => {
    return (
        <div className="hc-title-bar">
            { icon && <i className="hc-title-bar__icon material-icons">{ icon }</i> }
            <h2 className="hc-title-bar__title">{ title || children }</h2>
        </div>
    );
};

export default HCTitleBar;