import './SearchList.css';
import { useState, useRef } from 'react';


export default function SearchList() {

  const [items,  setItems] = useState(["Old School Runescape", "League of Legends", "Halo"])
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = items.filter(item => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value
    if (value === "") return;
    setItems(prev => {
      return [...prev, value];
    })
    inputRef.current.value = "";
  }

  function onChange(e) {
    setItems(prev => {
      const value = e.target.value;
      return prev.filter(item => 
        item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    })
  }

  return (
    <>
      <br />
      <br />
      Search:  
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        type="search" 
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit"> Add </button>
      </form>
      <h3 className="list_title"> Favorite Games </h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}
    </>
  )
};