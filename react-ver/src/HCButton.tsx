import React from 'react';

interface HCButtonProps {
    label?: string;
    icon?: string;
    iconTrailing?: string;
    type?: string;
    link?: string|null;
    isDisabled?: boolean;
}

const HCButton: React.FC<HCButtonProps> = ({ label, icon, iconTrailing, type, link, isDisabled, children }) => {
    if (!link) {
        return (
            <HCButtonBase
                label={label}
                icon={icon}
                iconTrailing={icon}
                type={type}
                isDisabled={isDisabled}
            >{ children }
            </HCButtonBase>
        );
    }

    return (
        <a href={ link }>
            <HCButtonBase
                label={label}
                icon={icon}
                iconTrailing={icon}
                type={type}
                link={link}
                isDisabled={isDisabled}
            >{ children }
            </HCButtonBase>
        </a>
    );
};

const HCButtonBase: React.FC<HCButtonProps> = ({ label, icon, iconTrailing, type, isDisabled, children }) => {
    return (
        <button className={ `hc-button${ type?.includes('outlined') ? ' hc-button--outlined' : type?.includes('filled') ? ' hc-button--filled' : '' }${ type?.includes('inverted') ? ' hc-button--inverted' : '' }${ isDisabled ? ' disabled' : '' }` } disabled={isDisabled}>
            { icon && <i className="hc-button__icon material-icons">{ icon }</i> }
            { label || children && <span className="hc-button__label">{ label || children }</span> }
            { iconTrailing && <i className="hc-button__icon material-icons">{ iconTrailing }</i> }
        </button>
    );
}

export default HCButton;