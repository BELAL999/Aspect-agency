import { useTheme } from "../contexts/context"
import TrueIcon from "../assets/images/true.svg"
const StartProject = () => {
    const {t} = useTheme();
    return (
        <section className="container my-12">
            <section className="flex flex-col justify-center items-center start-project">
                <h2 className="text-white text-5xl font-bold leading-[50.40px] pb-4">{t("start your Project")}</h2>
                <p className="text-white/60 text-lg font-medium max-w-[497px] pb-8 text-center">{t("project desc")}</p>
                <button className="w-60 h-10 px-16 py-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-[100px] shadow-[0px_11.199999809265137px_20px_0px_rgba(0,0,0,0.30)] inline-flex justify-center items-center gap-2.5 text-p1 cursor-pointer font-bold mb-16">
                    {t("start project")}
                </button>
                <div className="flex gap-4">
                    {["Customized design","Ongoing support" , "Fast delivery"].map((item)=>{
                        return (
                        <div className="px-4 py-3 bg-stone-900/10 rounded-[100px]  outline-1 outline-offset-[-1px] outline-stone-200/10 inline-flex justify-start items-center gap-2">
                            <div className="w-5 h-5 relative overflow-hidden">
                                <div className="w-5 left-0 top-0 absolute rounded-[100px]  outline-1 outline-offset-[-1px] outline-stone-200/10 inline-flex flex-col justify-center items-start">
                                    <div className="self-stretch flex-1 flex flex-col justify-start items-start overflow-hidden">
                                        <div className="w-5 h-5 flex flex-col justify-center items-center overflow-hidden">
                                            <div className="w-5 h-5 relative overflow-hidden">
                                                <div className="w-5 h-5 left-0 top-0 absolute bg-stone-900/10" />
                                            <img src={TrueIcon} alt="trueIcon" width={20} height={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center text-white/60 text-base font-medium leading-tight">{t(item)}</div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default StartProject
