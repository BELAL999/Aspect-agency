import {services} from "../constatns/data"
import TopSection from "./TopSection";
import branding from "../assets/videos/branding.mp4"
import { useTheme } from "../contexts/context";
import ServiceCard from "./ServiceCard"


const Services = () => {
    const {t} = useTheme()
    return (
        <section className='min-h-screen border mt-32 flex flex-col items-center service-section pt-12 max-w-[96rem] mx-auto'>
            <TopSection text={t("Services")} />
            <div className="justify-start text-white text-3xl font-normal leading-[50.40px] pb-6">{t("our services")}</div>
            <div className='services-container w-full h-full flex justify-center items-center'>                
                <div className='cards grid grid-cols-1 md:grid-cols-2 min-lg:grid-cols-3 gap-4 relative items-center justify-center'>
                    {services.map((service) => (
                        <ServiceCard id = {service.id} description={service.description} title={service.title} video={branding} glowBorder={service.glowBg} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services