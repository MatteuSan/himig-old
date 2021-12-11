/*
 *
 *  Copyright (c) 2021 Matteu
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

import React from 'react';

type HCNavBarProps = {
    trigger: boolean;
}

type HCNavbarItemProps = {
    label?: string;
    link: string;
}

type HCNavBarTriggerProps = {
    onClick: any;
    trigger: boolean;
}

const HCNavbar: React.FC<HCNavBarProps> = ({ trigger, children }) => {
    return (
        <nav className={`hc-navbar${ trigger ? ' open' : '' }`}>
            { children }
        </nav>
    );
};

const HCNavbarItem: React.FC<HCNavbarItemProps> = ({ label, link, children }) => {
    return (
        <a href={ link }>
            <span className="hc-navbar__item">{ label || children }</span>
        </a>
    );
}

const HCNavbarTrigger: React.FC<HCNavBarTriggerProps> = ({ onClick, trigger }) => {
    return (
        <button className="hc-js-navbar__trigger material-icons" onClick={ onClick }>
            { trigger ? 'close' : 'menu' }
        </button>
    );
}

export { HCNavbar, HCNavbarItem, HCNavbarTrigger }