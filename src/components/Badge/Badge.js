import React from 'react';

import css from './Badge.module.css'
const Badge = ({text}) => {
    return (
        <span className={css.Badge}>
            {text}
        </span>
    );
};

export {Badge};