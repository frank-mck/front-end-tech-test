import { useReducer } from 'react';
import './App.css'
import Brands from './brands/Brands';
import Categories from './categories/Categories';
import { useBrands } from './fetchBrands'

function reducer(state, action) {
  switch (action.type) {
    case "changeCategory":
      return { ...state, category: action.payload}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  const { data } = useBrands();
  const brands = data?.data?.records

  return (
    <div className="px-[77px]">
      <header>
        <h1 className="font-medium text-[55px]">SHOP</h1>
        <Categories />
      </header>
      <div>
        <Brands data={brands} />
      </div>
    </div>
  )
}

export default App
