import { useTheme } from "../contexts/context"
const TopSection = ({text}) => {
    const {t} = useTheme();
    return (
            <div className="h-12 px-3.5 bg-stone-900/10 rounded-[124.42px] outline-[1.24px] outline-offset-[-1.24px] outline-stone-200/10 backdrop-blur-[6.22px] inline-flex justify-center items-center gap-3">
                <div className="text-center justify-start text-white text-xl font-medium leading-loose">{t(text)}</div>
            </div>
    )
}

export default TopSection
