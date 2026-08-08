import Navbar from "../components/common/Navbar";
import HeroBanner from "../components/home/HeroBanner";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Footer from "../components/common/Footer";

function Home() {

    return (

        <>

            <Navbar />

            <HeroBanner />

            <CategorySection />

            <FeaturedProducts />

            <Footer/>
        </>

    )

}

export default Home;