import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductCRUD from './ProductCrude'

function App() {
// const [products, setProducts] = useState([]);
// const getProducts = async () => {
// const response = await fetch(
// "http://localhost:3000/product"
// "https://jsonplaceholder.typicode.com/posts"
// );
// const data = await response.json();
// setProducts(data);
// };
// useEffect(() => {
// getProducts();
// }, []);
return (
  <>
{/* <div>
  <div className='p-10'>
<h1 className='text-center text-4xl font-bold'>Products</h1>
<div className='grid grid-cols-3 gap-4 mt-8 p-4'>
{products.map((product) => (
<div key={product.id} className='border-2 p-4 rounded-md w-45 bg-teal-100'>
<h3>{product.title}</h3>
<p>₹{product.body}</p>
</div>

))}
</div>
</div>
</div> */}


<ProductCRUD/>
</>
);

}
export default App;


