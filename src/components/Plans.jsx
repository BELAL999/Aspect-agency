
import { plans } from "../constatns/data" 
import noice from "../assets/images/planNoise.png"

const Plans = () => {

    return (
        <section className="mt-32 flex flex-col items-center container overflow-hidden pt-12 pb-24">
            <div className="h-12 px-3.5 bg-stone-900/10 rounded-[124.42px] outline-[1.24px] outline-offset-[-1.24px] outline-stone-200/10 backdrop-blur-[6.22px] inline-flex justify-center items-center gap-3">
                <div className="text-center justify-start text-white text-xl font-medium leading-loose">Pricing</div>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-white text-4xl font-bold">Choose Your Plan</h2>
                <p className="text-stone-400 mt-4 max-w-2xl mx-auto">Select the perfect plan that fits your needs. We have flexible options for everyone, from individuals to large enterprises.</p>
            </div>
            <div className="mt-16 w-full flex flex-wrap justify-center gap-8 items-center">
                {plans.map((plan) => (
                    <div key={plan.id} className={`p-8 rounded-2xl border relative overflow-hidden lg:w-[calc(33%-40px)]  max-w-[500px] ${plan.featured ? ' scale-105 featured-plan' : 'bg-stone-900/20 border-stone-200/10'} flex flex-col`}>
                        {plan.featured && (
                            <div className="absolute top-0 left-0 w-full h-[178px] z-[-1] rounded-2xl bg-[#BF4A25] blur-[75px]">
                            </div>
                        )}
                        <h3 className="text-white text-2xl font-bold text-center">{plan.planName}</h3>
                        <p className={`font-semibold text-lg py-6 ${plan.featured ? 'text-[#FFFFFF]' : 'text-[#FFFFFF99]'}`}>{plan.description}</p>
                        <div className="text-center my-6">
                            <span className="text-white text-5xl font-bold">{plan.price}</span>
                        </div>
                        <ul className="flex-grow space-y-4 mb-8">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-p1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-stone-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full mt-auto py-3 rounded-2xl text-lg font-semibold transition-colors duration-300 cursor-pointer ${plan.featured ? 'bg-gradient-to-b from-orange-400 to-orange-600 rounded-[100px] shadow-[0px_11.199999809265137px_20px_0px_rgba(0,0,0,0.30)] text-p1' : 'bg-p1  border border-stone-200/20 text-[#050405]'}`}>
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Plans
