import "./DashboardCard.css";

function DashboardCard({

    title,
    value,
    icon,
    color

}) {

    return (

        <div className="dashboard-card">

            <div
                className="dashboard-icon"
                style={{ background: color }}
            >

                <i className={icon}></i>

            </div>

            <div>

                <p className="dashboard-title">

                    {title}

                </p>

                <h3>

                    {value}

                </h3>

            </div>

        </div>

    );

}

export default DashboardCard;