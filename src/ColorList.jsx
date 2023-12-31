import React from 'react'
import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  const colorBlocks = colors.map((color, index) => {
    return(
        <SingleColor key={nanoid()} color={color} index={index} />
    )
  });

  return (
    <section className='colors'>
      {colorBlocks}
    </section>
  )
}

export default ColorList
