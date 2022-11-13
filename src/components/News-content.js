const NewsContent = () => {
    return (
        <div className="bg-black text-white px-4 py-9 h-full">
                <div className="text-orange-300 text-4xl mb-5 font-semibold">New</div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl">Hydrogen VS Electric Cars</p>
                        <p className="w-72 text-slate-30">Will hydrogen-fueled cars ever catch up to EVs?</p>
                        <div className="border-b-[1px]"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-2xl">The Downsides of AI Artistry</p>
                        <p className="w-72 text-slate-300">What are the possible adverse effects of on-demand AI image generation?</p>
                        <div className="border-b-[1px]"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-2xl">Is VC Funding Drying Up?</p>
                        <p className="w-72 text-slate-300">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                    </div>
                </div>
        </div>
     );
}

export default NewsContent;