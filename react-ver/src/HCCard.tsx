import React from 'react';
import HCTag from "./HCTag";

interface HCCardProps {
    title: string;
    icon?: string;
    description?: string;
    media?: string;
    tags?: any;
    hasNoAction?: boolean;
}

const HCCard: React.FC<HCCardProps> = ({ title, icon, description, media, tags, hasNoAction, children }) => {
    if (hasNoAction) {
        return (
            <div className="hc-card">
                { media &&
                <div className="hc-card__media">
                    <img src={ media } alt={ title + ` media` } loading="lazy" />
                </div>
                }
                <div className="hc-card__content">
                    <div>
                        <div className="hc-card__title">
                            { icon && <i className="hc-card__title__icon material-icons" aria-hidden="true">{ icon }</i> }
                            <h2>{ title }</h2>
                        </div>
                        { tags &&
                        <div className="hc-card__tags">
                            { tags.forEach((tag: string) => {
                                return (
                                    <HCTag>
                                        { tag }
                                    </HCTag>
                                )
                            }) }
                        </div>
                        }
                        { children && <p className="hc-card__subtitle">{ children }</p> }
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="hc-card">
                { media &&
                <div className="hc-card__media">
                    <img src={ media } alt={ title + ` media` } />
                </div>
                }
                <div className="hc-card__content">
                    <div>
                        <div className="hc-card__title">
                            { icon && <i className="hc-card__title__icon material-icons" aria-hidden="true">{ icon }</i> }
                            <h2>{ title }</h2>
                        </div>
                        { tags &&
                        <div className="hc-card__tags">
                            { tags.map((tag: string, key: any) => {
                                return (
                                    <HCTag key={ key }>{ tag }</HCTag>
                                )
                            }) }
                        </div>
                        }
                        { description && <p className="hc-card__subtitle">{ description }</p> }
                    </div>
                    { children &&
                    <div className="hc-card__actions">
                        { children }
                    </div>
                    }
                </div>
            </div>
        );
    }
};

export default HCCard;