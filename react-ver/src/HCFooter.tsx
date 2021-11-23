import React from 'react';

interface HCFooterProps {
    title: string;
    version?: string|number;
    author?: string;
}

const HCFooter: React.FC<HCFooterProps> = ({ title, version, author }) => {
    return (
        <footer className="hc-footer">
            <h3 className="hc-footer__site-name">
                { title }
                { version && <span className="hc-footer__version">v{ version }</span> }
            </h3>
            <p className="hc-footer__copyright">Copyright &copy; { new Date().getFullYear() } - { author }</p>
        </footer>
    );
};

export default HCFooter;