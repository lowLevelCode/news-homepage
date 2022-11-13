const CarOwn = ({img, number, primaryText, secondaryText}) => {
    return (
        <div className="flex gap-5">
            <img src={img} alt="" width="80px" height="95px"/>
            <div className="flex flex-col w-56">
                <span className="text-3xl text-gray-400">{number}</span>
                <span className="text-xl font-semibold">{primaryText}</span>
                <span className="text-base text-gray-500">{secondaryText}</span>
            </div>
        </div>
     );
}
 
export default CarOwn;