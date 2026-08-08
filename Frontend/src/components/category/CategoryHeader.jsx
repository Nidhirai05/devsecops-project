import { useParams } from "react-router-dom";

function CategoryHeader() {

    const { slug } = useParams();

    const category = slug
        .replace("-", " ")
        .replace(/\b\w/g, c => c.toUpperCase());

    return (

        <section className="container text-center py-4">

            <h2 className="display-5 fw-bold">

                {category} Collection

            </h2>

            <p className="text-muted">

                Discover premium styles curated for modern women.

            </p>

        </section>

    );

}

export default CategoryHeader;