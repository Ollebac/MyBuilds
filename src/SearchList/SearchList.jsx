import './SearchList.css';
import { useState, useRef } from 'react';


export default function SearchList() {

  const [items,  setItems] = useState(['Old School Runescape', 'League of Legends', 'Halo'])
  const [query, setQuery] = useState('');
  const addRef = useRef();
  const removeRef = useRef();

  const filteredItems = items.filter(item => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  function addSubmit(e) {
    e.preventDefault();

    const value = addRef.current.value
    if (value === '') return;
    setItems(prev => {
      return [...prev, value];
    })
    addRef.current.value = '';
  }

  function removeSubmit(e) {
    e.preventDefault();

    const removeQuery = removeRef.current.value;

    setItems(prev => prev.filter((val) => removeQuery.toLowerCase() !== val.toLowerCase()));    
    removeRef.current.value = ''
  }

  function onChange(e) {
    setItems(prev => {
      const value = e.target.value;
      return prev.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      )
    })
  }

  return (
    <main className='search_list_page'>
      <br />
      <header>
        <p className='challenge'> 
          <strong>Challenge: </strong> 
          <i>Create a dynamic list that can be modified and that can be filtered via a search bar.</i>
        </p>
      </header>
      <br />
      <br />
      <div className='search'>
        <strong>Search:</strong> &nbsp; 
        <input 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
          type='search' 
        />
      </div>
      <br />
      <form onSubmit={addSubmit}>
        Add Item: <input ref={addRef} type='text' />
        <button type='submit'> Add </button>
      </form>
      <form onSubmit={removeSubmit}>
        Remove Item: <input ref={removeRef} type='text' />
        <button type='submit'> Remove </button>
      </form>
      <div className='solution'>
        <h4 className='search_title'> Favorite Games </h4>
        {filteredItems.map((item, index) => (
          <div className='list_item'>
            <strong> {index + 1}: </strong>
            {item}
          </div>
        ))}
      </div>
    </main>
  )
};