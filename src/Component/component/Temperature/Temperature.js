import React from 'react';

const Temperature = ({children}) =>(
  <div>
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </div>
)

export default Temperature;