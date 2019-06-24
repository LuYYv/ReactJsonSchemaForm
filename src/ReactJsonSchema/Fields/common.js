import React from 'react';

export const withTitle = (Component) => ({ title, require=false }) => {
  const TitleField = ( 
    <div className="titleField">
      <span className="titleContext">
        {title}
      </span>
      <span className="require">{require && `*`}</span>
      <span className="titleColon">:</span>
    </div>
   )
  return (
    <>
      <TitleField />
      <Component />
    </>
  )
}