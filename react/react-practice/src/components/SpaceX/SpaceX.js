import './SpaceX.css';

export default function SpaceX(items) {

    const {items: {
        mission_name,
        flight_number,
        launch_year,
        links: {
            mission_patch
        }
    }} = items

    return (
        <div className={'content-spacex'}>

            <div className="content-spacex-block">
                <div className={'content-spacex-info'}>
                    <span><b>ID:</b> {flight_number}</span>
                    <h3><b>Mission Name:</b> {mission_name}</h3>
                    <p><b>Year:</b> {launch_year}</p>
                </div>
                <div className={'content-spacex-img'}>
                    <img src={mission_patch} alt={mission_name}/>
                </div>
            </div>

        </div>
    )
}