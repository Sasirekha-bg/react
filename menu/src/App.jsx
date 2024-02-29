import { useState } from 'react';
import './App.css'
import MenuItem from './MenuItem';
import menuList from './data.js'


export default function () {
  let [filterdList, setFilteredList] = useState(menuList);
  function handleFilter(value) {
    setFilteredList(menuList.filter(item => item.category === value))
  }


  return (
    <div>
      <div className='head'>
        <h1>Our Menu</h1>
        <hr />
        <ul>
          <li onClick={()=> setFilteredList(menuList)}>All</li>
          <li onClick={() =>
            handleFilter('breakfast')
          }>Breakfast</li>
          <li onClick={() => handleFilter('lunch')}>Lunch</li>
          <li onClick={() => handleFilter('shakes')}>Shakes</li>
          <li onClick={() => handleFilter('dinner')}>Dinner</li>
        </ul>
      </div>
      <div className='menu-items'>
        {filterdList.map(item => <MenuItem item={item} key={item.id} />)}
      </div>
    </div>
  );

}

