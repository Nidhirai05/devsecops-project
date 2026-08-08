import CategoryCard from "./CategoryCard";
import "./CategorySection.css";
import {categories} from "../../data/categories.js";

function CategorySection() {



return(

<section className="category-section">

<div className="container">

<div className="section-heading text-center">

<h2>Shop By Category</h2>

<p>
Discover timeless fashion curated just for you.
</p>

</div>

<div className="row g-4 mt-4">

{

categories.map(category=>(

<div
className="col-12 col-sm-6 col-lg-4"
key={category.id}
>

<CategoryCard category={category}/>

</div>

))

}

</div>

</div>

</section>

)

}

export default CategorySection;