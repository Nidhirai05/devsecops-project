import { allProducts } from "./products";

export const orders = [

    {
        id: "SA2026001",

        orderDate: "29 Jul 2026",

        status: "Delivered",

        paymentMethod: "Online Payment",

        paymentStatus: "Paid",

        subtotal: 3198,

        deliveryCharge: 0,

        total: 3198,

        shippingAddress: {

            name: "Priyanka Wankhede",

            phone: "9876543210",

            address:
                "Akurdi, Pune, Maharashtra",

            pincode: "411035"

        },

        products: [

            {

                ...allProducts[0],

                quantity: 2

            },

            {

                ...allProducts[6],

                quantity: 1

            }

        ]

    },

    {

        id: "SA2026002",

        orderDate: "27 Jul 2026",

        status: "Processing",

        paymentMethod: "Cash on Delivery",

        paymentStatus: "Pending",

        subtotal: 1799,

        deliveryCharge: 99,

        total: 1898,

        shippingAddress: {

            name: "Priyanka Wankhede",

            phone: "9876543210",

            address:
                "Akurdi, Pune, Maharashtra",

            pincode: "411035"

        },

        products: [

            {

                ...allProducts[3],

                quantity: 1

            }

        ]

    }

];