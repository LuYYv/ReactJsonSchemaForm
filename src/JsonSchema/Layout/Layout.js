import React from 'react';

//最基础的layout, 默认
export const SimpleLayout = ({ titleChild, child }) => {
    return (
        <div className="simple-layout">
            {titleChild}
            {child}
        </div>
    )
}
