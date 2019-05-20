import React from 'react';
import TitleField from '../Fields/TitleField';
import {
    SimpleLayout
} from './Layout';

const layoutMap = {
    SimpleLayout
}

const getTitleField = ({ schema }) => {
    return (
        <div className="title">
            <TitleField 
                title={schema.title}
            />
        </div>
    )
}

export default function ({ schema, child }) {
    let _layoutWrapper = layoutMap[schema.layout || 'SimpleLayout'] || SimpleLayout;
    let titleChild = getTitleField({ schema });
    return _layoutWrapper({ titleChild, child });
}
