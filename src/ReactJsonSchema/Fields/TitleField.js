import React from 'react';

export const TitleField = (props) => {
  const {title, require=false} = props;
  return (
    <div className="titleField">
      <span className="titleContext">
          {title}
      </span>
      <span className="require">{require && `*`}</span>
      <span className="titleColon">:</span>
    </div>
  )
}

export const ErrorField = (props) => {
  const {errorConfig=``, active=false} = props;
  return (
    <div className="errorField">
      *{errorConfig}
    </div>
  )
}
