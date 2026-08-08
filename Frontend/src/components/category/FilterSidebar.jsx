import "./FilterSidebar.css";

function FilterSidebar({
  selectedPrice,
  setSelectedPrice,

  selectedSizes,
  setSelectedSizes,

  selectedColors,
  setSelectedColors,

  selectedDiscount,
  setSelectedDiscount,

  inStockOnly,
  setInStockOnly
}) {
  return (
    <div className="filter-sidebar">

      <h4 className="filter-title">
        Filters
      </h4>

      {/* Price */}

      <div className="filter-group">

        <h6>Price</h6>

        <label>
          <input
            type="radio"
            name="price"
            checked={selectedPrice === "under500"}
            onChange={() => setSelectedPrice("under500")}
          />
          Under ₹500
        </label>

        <label>
          <input
            type="radio"
            name="price"
            checked={selectedPrice === "500-1000"}
            onChange={() => setSelectedPrice("500-1000")}
          />
          ₹500 - ₹1000
        </label>

        <label>
          <input
            type="radio"
            name="price"
            checked={selectedPrice === "1000-2000"}
            onChange={() => setSelectedPrice("1000-2000")}
          />
          ₹1000 - ₹2000
        </label>

        <label>
          <input
            type="radio"
            name="price"
            checked={selectedPrice === "2000+"}
            onChange={() => setSelectedPrice("2000+")}
          />
          Above ₹2000
        </label>

      </div>

      {/* Size */}

      <div className="filter-group">

        <h6>Size</h6>

        <div className="size-buttons">

          {["XS", "S", "M", "L", "XL"].map(size => (

            <button
              key={size}
              type="button"
              className={selectedSizes.includes(size) ? "active" : ""}
              onClick={() => {

                if (selectedSizes.includes(size)) {

                  setSelectedSizes(
                    selectedSizes.filter(s => s !== size)
                  );

                } else {

                  setSelectedSizes([
                    ...selectedSizes,
                    size
                  ]);

                }

              }}
            >

              {size}

            </button>

          ))}

        </div>
      </div>

      {/* Color */}

      <div className="filter-group">

        <h6>Color</h6>

        <div className="color-list">

          {["Black", "White", "Pink", "Purple"].map(color => (

            <span

              key={color}

              className={`color ${color.toLowerCase()} ${selectedColors.includes(color) ? "selected" : ""
                }`}

              onClick={() => {

                if (selectedColors.includes(color)) {

                  setSelectedColors(

                    selectedColors.filter(c => c !== color)

                  );

                } else {

                  setSelectedColors([

                    ...selectedColors,

                    color

                  ]);

                }

              }}

            ></span>

          ))}

        </div>

      </div>

      {/* Discount */}

      <div className="filter-group">

        <h6>Discount</h6>

        <label>
          <input
            type="radio"
            name="discount"
            checked={selectedDiscount === 20}
            onChange={() => setSelectedDiscount(20)}
          />
          20% & Above
        </label>

        <label>
          <input
            type="radio"
            name="discount"
            checked={selectedDiscount === 40}
            onChange={() => setSelectedDiscount(40)}
          />
          40% & Above
        </label>

        <label>
          <input
            type="radio"
            name="discount"
            checked={selectedDiscount === 60}
            onChange={() => setSelectedDiscount(60)}
          />
          60% & Above
        </label>

      </div>

      {/* Stock */}

      <div className="filter-group">

        <h6>Availability</h6>

        <label>

          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />

          In Stock

        </label>

      </div>

      <button

        className="clear-btn"

        type="button"

        onClick={() => {

          setSelectedPrice("");

          setSelectedSizes([]);

          setSelectedColors([]);

          setSelectedDiscount("");

          setInStockOnly(false);

        }}

      >

        Clear Filters

      </button>

    </div>
  );
}

export default FilterSidebar;