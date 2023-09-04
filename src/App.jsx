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
  const [state, dispatch] = useReducer(reducer, { category: "ALL" });
  const { data } = useBrands();
  const brands = data?.data?.records

  return (
    <div className="px-[77px]">
      <header>
        <h1 className="font-medium text-[55px]">SHOP</h1>
        <Categories state={state} updateCategory={(category) => dispatch({payload: category, type: "changeCategory"})} />
      </header>
      <div>
        <Brands data={brands} state={state} />
      </div>
    </div>
  )
}

export default App
