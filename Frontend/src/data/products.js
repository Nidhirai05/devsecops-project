// Temporary images
import kurtisBanner from "../assets/images/category/kurtis.jpg";
import westernBanner from "../assets/images/category/western.jpg";
import dressesBanner from "../assets/images/featured/maxi.jpg";
import ethnicBanner from "../assets/images/featured/saree.jpg";
import topsBanner from "../assets/images/featured/shirt.jpg";
import topsBanner2 from "../assets/images/featured/shirt2.jpg";
import bottomBanner from "../assets/images/featured/coord.jpg";

// Temporary banner images
export const banners = {
    "kurtis": kurtisBanner,
    "western-wear": westernBanner,
    "ethnic-wear": ethnicBanner,
    "dresses": dressesBanner,
    "tops": topsBanner,
    "bottom-wear": bottomBanner
};

// Temporary dummy products
export const allProducts = [

    {
        id: 1,
        name: "Floral Kurti",
        category: "kurtis",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        size: "M",
        color: "Purple",
        stockQuantity: 10,

        image: kurtisBanner,

        images: [
            kurtisBanner,
            kurtisBanner,
            kurtisBanner
        ],

        description:
            "Elegant floral printed cotton kurti crafted from soft breathable fabric. Perfect for office wear, casual outings, and festive occasions with all-day comfort.",

        rating: 4.7,
        reviews: 148
    },

    {
        id: 2,
        name: "Cotton Kurti",
        category: "kurtis",
        price: 899,
        originalPrice: 1299,
        discount: 30,
        size: "L",
        color: "Pink",
        stockQuantity: 10,

        image: kurtisBanner,

        images: [
            kurtisBanner,
            kurtisBanner,
            kurtisBanner
        ],

        description:
            "Comfortable everyday cotton kurti featuring a lightweight fabric, modern fit, and elegant design suitable for work and casual styling.",

        rating: 4.5,
        reviews: 150
    },

    {
        id: 3,
        name: "Maxi Dress",
        category: "dresses",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        size: "S",
        color: "Black",
        stockQuantity: 12,

        image: dressesBanner,

        images: [
            dressesBanner,
            dressesBanner,
            dressesBanner
        ],

        description:
            "Stylish maxi dress made from premium fabric with a flattering silhouette. Ideal for vacations, parties, and evening gatherings.",

        rating: 4.4,
        reviews: 90
    },

    {
        id: 4,
        name: "Party Dress",
        category: "dresses",
        price: 1799,
        originalPrice: 1999,
        discount: 20,
        size: "M",
        color: "Pink",
        stockQuantity: 12,

        image: dressesBanner,

        images: [
            dressesBanner,
            dressesBanner,
            dressesBanner
        ],

        description:
            "Beautiful party wear dress featuring elegant detailing, premium stitching, and a flattering fit for birthdays, weddings, and celebrations.",

        rating: 4.9,
        reviews: 300
    },

    {
        id: 5,
        name: "Designer Saree",
        category: "ethnic-wear",
        price: 2199,
        originalPrice: 2300,
        discount: 25,
        size: "S",
        color: "Purple",
        stockQuantity: 10,

        image: ethnicBanner,

        images: [
            ethnicBanner,
            ethnicBanner,
            ethnicBanner
        ],

        description:
            "Premium designer saree featuring luxurious fabric and elegant craftsmanship. Perfect for weddings, festivals, and traditional celebrations.",

        rating: 4.0,
        reviews: 70
    },
    {
        id: 6,
        name: "Casual Western Top",
        category: "western-wear",
        price: 799,
        originalPrice: 1999,
        discount: 25,
        size: "L",
        color: "White",
        stockQuantity: 10,

        image: westernBanner,

        images: [
            westernBanner,
            westernBanner,
            westernBanner
        ],

        description:
            "Modern western top designed with soft breathable fabric and trendy styling for everyday comfort, office wear, and casual outings.",

        rating: 4.6,
        reviews: 190
    },
    {
        id: 7,
        name: "Casual Top",
        category: "tops",
        price: 799,
        originalPrice: 1999,
        discount: 25,
        size: "XL",
        color: "Black",
        stockQuantity: 12,

        image: topsBanner,

        images: [
            topsBanner,
            topsBanner2,
            topsBanner
        ],

        description:
            "Trendy women's casual top with a comfortable fit, stylish neckline, and premium fabric. Easy to pair with jeans, skirts, and trousers.",

        rating: 4.8,
        reviews: 260
    },

    {
        id: 8,
        name: "Co-ord Set",
        category: "bottom-wear",
        price: 1200,
        originalPrice: 1999,
        discount: 25,
        size: "S",
        color: "Black",
        stockQuantity: 12,
       
        image: bottomBanner,

        images: [
            bottomBanner,
            bottomBanner,
            bottomBanner
        ],

        description:
            "Stylish co-ord set crafted with premium fabric for maximum comfort and effortless fashion. Perfect for travel, brunch dates, and casual outings.",

        rating: 4.4,
        reviews: 177
    }
];

