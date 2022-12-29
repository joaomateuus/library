import React from 'react'
import { Search } from './style';


// import { Search, SearchInputs, DataResult, DataItem } from './style';

interface Props {
    placeholder: string;
    // data: string[];
}

export const SearchBar: React.FC<Props> = ({placeholder}) => {
  return (
    <div style = {{display: 'flex', alignItems: 'center', padding: '10px'}}>
      <input type="text" placeholder={placeholder} 
        style={
          {
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', height: '7vh',
            width: '30vw', border: 'none', 'borderRadius': '5px', padding: '10px', outline: 'none'
          }
        }
      />
        
    </div>
  )
}
