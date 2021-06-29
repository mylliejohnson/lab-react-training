import Rating from './Rating.js'

function DriverCard({name, rating, img, car}){
    return (
        <div className="driverCard">
        <img src={img} style={{width:'150px'}}></img>
            {name}
            <Rating>{rating}</Rating>
            {car.model} {car.licensePlate}
        </div>
    )
}

export default DriverCard