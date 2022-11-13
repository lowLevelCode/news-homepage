import CarOwn from "./Card-own";

const CardsContainer = () => {
    const datos = [
        {
            img:'./img/image-retro-pcs.jpg',
            primaryText:'Reviving Retro PCs',
            secondaryText:'What happens when old PCs are given modern upgrades?'
        },
        {
            img:'./img/image-top-laptops.jpg',
            primaryText:'Top 10 Laptops of 2022',
            secondaryText:'Our best picks for various needs and budgets.'
        },
        {
            img:'./img/image-gaming-growth.jpg',
            primaryText:'The Growth of Gaming',
            secondaryText:'How the pandemic has sparked fresh opportunities.'
        },
    ];

    return (
        <div className="flex justify-between flex-col gap-8 lg:flex-row">
            {datos.map((data,index)=>(
                <CarOwn
                key={index}
                img={data?.img}
                number={`0${index + 1}`}
                primaryText={data?.primaryText}
                secondaryText={data?.secondaryText}/>
            ))}
        </div>
     );
}

export default CardsContainer;