import { useState } from "react";

import "./ProductGallery.css";

function ProductGallery({ product }) {

    const images = product.images || [product.image];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (

        <div className="product-gallery">

            {/* Main Image */}

            <div className="main-image">

                <img
                    src={selectedImage}
                    alt={product.name}
                    className="img-fluid"
                />

            </div>

            {/* Thumbnails */}

            <div className="thumbnail-list">

                {images.map((image, index) => (

                    <div
                        key={index}
                        className={`thumbnail ${selectedImage === image ? "active" : ""}`}
                        onClick={() => setSelectedImage(image)}
                    >

                        <img
                            src={image}
                            alt={`${product.name}-${index}`}
                        />

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ProductGallery;