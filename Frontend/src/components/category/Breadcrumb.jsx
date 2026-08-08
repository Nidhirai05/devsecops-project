
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Breadcrumb() {

    const { slug } = useParams();

    const category = slug
        .replace("-", " ")
        .replace(/\b\w/g, c => c.toUpperCase());

    return (

        <div className="container mt-4">

            <nav>

                <ol className="breadcrumb">

                    <li className="breadcrumb-item">

                        <Link to="/">Home</Link>

                    </li>

                    <li className="breadcrumb-item">

                        Women

                    </li>

                    <li className="breadcrumb-item active">

                        {category}

                    </li>

                </ol>

            </nav>

        </div>

    );

}

export default Breadcrumb;