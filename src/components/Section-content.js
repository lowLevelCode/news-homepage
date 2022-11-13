const SectionContent = () => {
    return (
        <div className="flex flex-col gap-5">
            <picture>
                <source media="(max-width: 799px)" srcset="./img/image-web-3-mobile.jpg" />
                <img src="./img/image-web-3-desktop.jpg" alt="Some" className="w-full h-72"/>
            </picture>
            <div className="flex justify-between flex-col gap-6 lg:flex-row">
                <div className="text-5xl w-80">The Bright Future of Web 3.0?</div>
                <div className="flex flex-col items-start justify-between gap-3 lg:w-[40%]">
                    <p className="text-gray-500">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?
                    </p>
                    <button className="bg-[#F05E51] px-8 py-3 text-white active:bg-black">READ MORE</button>
                </div>
            </div>
        </div>
     );
}

export default SectionContent;