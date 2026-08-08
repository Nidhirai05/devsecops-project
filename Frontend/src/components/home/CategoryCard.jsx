import { Link } from "react-router-dom";

function CategoryCard({ category }) {

    return (
        <Link
            to={`/category/${category.slug}`}
            className="text-decoration-none"
        >
            <div className="category-card">

                <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                />

                <div className="category-overlay">

                    <h3>{category.name}</h3>

                    <p className="explore-text">
                        Explore Collection
                        <i className="bi bi-arrow-right"></i>
                    </p>

                </div>

            </div>
        </Link>
    );
}

export default CategoryCard;