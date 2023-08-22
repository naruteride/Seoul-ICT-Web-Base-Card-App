import React from 'react'
import { NavLink } from 'react-router-dom'
import { Items, Item, Image } from './styeldComp'
import { useSelector } from 'react-redux';

const Cards = () => {
  const contents = useSelector((state) => state.contents)
  return (
    <Items>
      {contents.map((content, idx) => {
        return <Item key={idx}>
          <NavLink to={content.path}>
            <Image imagePath={content.imagePath}></Image>
          </NavLink>
          <h1 style={{ margin: 10 }}>{content.title}</h1>
          <p style={{ padding: 10, margin: 0 }}>{content.character}</p>
        </Item>
      })}
    </Items>
  )
}

export default Cards;