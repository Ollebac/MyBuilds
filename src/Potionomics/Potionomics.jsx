import React from 'react';
import './Potionomics.css';
import potions from './IngredientStats';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ItemTable = (data) => {
  const { items, requestSort, sortConfig } = useSortableData(data.PotionIngredients);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption className='table_title'>Potionomics Ingredients List</caption>
      <thead>
        <tr>
          <th className='table_header_long'>
            <button type="button" onClick={() => requestSort('Name')} className={getClassNamesFor('Name')}>
              Name
            </button>
          </th>
          <th className='table_header_attribute'>
            <button type="button" onClick={() => requestSort('Attribute A')} className={getClassNamesFor('Attribute A')}>
              A
            </button>
          </th>
          <th className='table_header_attribute'>
            <button type="button" onClick={() => requestSort('Attribute B')} className={getClassNamesFor('Attribute B')}>
              B
            </button>
          </th>
          <th className='table_header_attribute'>
            <button type="button" onClick={() => requestSort('Attribute C')} className={getClassNamesFor('Attribute C')}>
              C
            </button>
          </th>
          <th className='table_header_attribute'>
            <button type="button" onClick={() => requestSort('Attribute D')} className={getClassNamesFor('Attribute D')}>
              D
            </button>
          </th>
          <th className='table_header_attribute'>
            <button type="button" onClick={() => requestSort('Attribute E')} className={getClassNamesFor('Attribute E')}>
              E
            </button>
          </th>
          <th className='table_header_long'>
            <button type="button" onClick={() => requestSort('Total Magimin')} className={getClassNamesFor('Total Magimin')}>
              Total Magimin
            </button>
          </th>
          <th className='table_header_price'>
            <button type="button" onClick={() => requestSort('Price')} className={getClassNamesFor('Price')}>
              Price
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item}>
            <td className='table_content' id='table_content_name'>{item.Name}</td>
            <td className='table_content'>{Number(item['Attribute A'])}</td>
            <td className='table_content'>{Number(item['Attribute B'])}</td>
            <td className='table_content'>{Number(item['Attribute C'])}</td>
            <td className='table_content'>{Number(item['Attribute D'])}</td>
            <td className='table_content'>{Number(item['Attribute E'])}</td>
            <td className='table_content'>{Number(item['Total Magimin'])}</td>
            <td className='table_content'>{Number(item.Price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Potionomics() {
  return (
    <div className='page_content'>
        <div className='page_header'>
            <img src="cauldron2.png" alt="Cauldron" id="potion_img_content" />
            <div className='page_header_text'>
              <p>Potionomics <br></br> Guide</p>
            </div>
        </div>
        <hr className='page_break' />
        <div className="table_container">
          <ItemTable PotionIngredients = {potions}/>
        </div>
    </div>
  );
}