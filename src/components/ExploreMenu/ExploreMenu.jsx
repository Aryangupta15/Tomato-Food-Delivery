import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../Eassets/assets'

export const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>

        <h1>Explore our menu</h1>
        <p>Discover Flavorful Delights: Indulge in Our Exquisite Menu, Every Bite a Culinary Adventure!</p>

        <div className="explore-menu-list">
            {menu_list.map( (item,index) => {
                return (
                    <div onClick={()=>setCategory(prev => prev === item.menu_name?"All":item.menu_name) } key={index} className="explore-menu-list-item">
                        <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )

            })}
        </div>

        <hr />
        
    </div>
  )
}
