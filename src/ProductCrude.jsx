import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
function ProductCRUD() {
const [products, setProducts] = useState([]);
const [form, setForm] = useState({
title: "",
body: ""
});
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
// GET

const getProducts = async () => {
try {
setLoading(true);
setError("");
const response = await fetch(API_URL);
if (!response.ok) {
throw new Error("Failed to fetch products");
}
const data = await response.json();
setProducts(data);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
};
// Input handling
const handleChange = (e) => {
const { name, value } = e.target;
setForm((prev) => ({
...prev,
[name]: value

}));
};
// POST
const handleSubmit = async (e) => {
e.preventDefault();
try {
setError("");
setSuccess("");
const response = await fetch(API_URL, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
title: form.title,
body: form.body
})
});
if (!response.ok) {
throw new Error("Failed to add product");
}
const newProduct = await response.json();
setProducts((prev) => [
...prev,
newProduct
]);

setForm({
title: "",
body: ""
});
setSuccess("Product added successfully");
} catch (error) {
setError(error.message);
}
};
// DELETE
const deleteProduct = async (id) => {
try {
setError("");
setSuccess("");
const response = await fetch(
`${API_URL}/${id}`,
{
method: "DELETE"
}
);
if (!response.ok) {
throw new Error("Failed to delete product");
}
setProducts((prev) =>
prev.filter((product) => product.id !== id)
);

setSuccess("Product deleted successfully");
} catch (error) {
setError(error.message);
}
};
useEffect(() => {
getProducts();
}, []);
return (
<div className="p-5 m-auto">
   
<h1 className="text-center font-bold text-4xl ">Product Management</h1>
{/* Form */}

<form onSubmit={handleSubmit}>
     <div className="p-10 flex  justify-center ">
<input
type="text"
name="title"
className="w-full border rounded-md pl-2"
value={form.title}
onChange={handleChange}
placeholder="Product name"
/>
<input
type="text"
name="body"
className="w-full border rounded-md ml-3 pl-2"
value={form.body}
onChange={handleChange}
placeholder="Product description"

/>
<button type="submit" className="border bg-green-100 ml-3 rounded-md p-2">
Add
</button>
</div>
</form>

{/* Messages */}
{loading && (
<p className="text-center ">Loading products...</p>
)}
{error && (
<p>{error}</p>
)}
{success && (
<p>{success}</p>
)}
{/* Product List */}
<h2 className="text-center text-3xl font-bold">Products</h2>
<div className="grid grid-cols-3 gap-4 m-10">
{products.map((product) => (
<div key={product.id} className="border p-3 rounded-md mt-6 bg-pink-100">
<h3>{product.title}</h3>
<p>{product.body}</p>
<button
className="border mt-5 rounded-md  w-full bg-blue-300"
onClick={() =>

deleteProduct(product.id)
}
>
Delete
</button>
</div>
))}
</div>
</div>
);
}
export default ProductCRUD;