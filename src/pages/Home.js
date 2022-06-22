import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <div>
      <SearchForm/>
      <CocktailList/>
    </div>
  )
}

