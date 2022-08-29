import React, { useState } from 'react'
import { cardData } from '../../utils/cardData';
import './SearchInput.css'

export default function SearchInput({handleSearchChange}) {
  return (
      <div>
          <input
          className="input-width input-home"
          type="search"
          placeholder="⌕   Search for healthy food"
          onChange={(e) => handleSearchChange(e)}
          />
    </div>
  )
}
