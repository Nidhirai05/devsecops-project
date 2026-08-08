import ProductGrid from "./ProductGrid";

function SimilarProducts({

    products,

    title

}){

    return(

        <section>

            <h2 className="mb-4">

                {title}

            </h2>

            <ProductGrid

                products={products}

            />

        </section>

    );

}

export default SimilarProducts;