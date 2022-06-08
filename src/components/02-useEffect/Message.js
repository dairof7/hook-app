import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setcoords] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        console.log('se monto');    
        const mousemove = (e) => {
            setcoords({
                x: e.x,
                y: e.y
            })
        }
        window.addEventListener('mousemove', mousemove)
      return () => {
        console.log('se desmonto');    
        window.removeEventListener('mousemove', mousemove)
      };
    }, []);
    

  return <div>
      <h3>Mi bebe emi</h3>
      <h2>x: {coords.x}</h2>
      <h2>x: {coords.y}</h2>
  </div>;
};
