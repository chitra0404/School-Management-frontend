
export function Card({ data }) {
    const colorMapping = {
        success: "#28a745",
        warning: "#ffc107",
        info: "#17a2b8",
        primary: "#007bff",
        // Add more colors if needed
    };
    const backgroundColor = colorMapping[data.colors] || "#ffffff"; // Default to white if color not found
    return (
        <div className="col-xl-3 col-md-6 pt-5">
            <div className={`card border-left-${data.colors} shadow h-100 py-2`}style={{ backgroundColor }}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold  text-uppercase mb-1`}>
                                {data.title}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.count}</div>
                        </div>
                        <div class="col-auto">
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}