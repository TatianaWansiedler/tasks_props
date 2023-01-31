import React from 'react';
import Part from '../Part/Part';

const Content = ({parts}) => {
    return (
        <div>
            {
                parts.map(el => <Part key={el.id} {...el} />)
            }
        </div>
    );
};

export default Content;