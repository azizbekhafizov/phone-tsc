import Image from "next/image";


export default function MiniWatch() {
    return (
        <div className="flex flex-wrap justify-center mx-auto gap-6 mt-20">
            <div className="flex items-center justify-around  h-[239px] rounded-[22px] bg-[#F6F6F6] w-[354px]">
                <img src="/assets/images/apple.png" alt="" />
                <div>
                    <h1 className="font-bold text-4xl leading-[100%] text-[#1E1D1D]">Apple</h1>
                    <p className="text-[#8B8E99] w-[173px] font-medium text-[16px] leading-[20px] mt-2">Apple is one of the most famous smart watches providing company.</p>
                </div>
            </div>

            <div className="flex items-center justify-around  h-[239px] rounded-[22px] bg-[#F6F6F6] w-[354px]">
                <img src="/assets/images/xiomi.png" alt="" />
                <div>
                    <h1 className="font-bold text-4xl leading-[100%] text-[#1E1D1D]">Xiaomi</h1>
                    <p className="text-[#8B8E99] w-[173px] font-medium text-[16px] leading-[20px] mt-2">Xiaomi smart watches are produced by MI company.</p>
                </div>
            </div>

            <div className="flex items-center justify-around h-[239px] rounded-[22px] bg-[#F6F6F6] w-[354px]">
                <img src="/assets/images/fitbit.png" alt="" />
                <div>
                    <h1 className="font-bold text-4xl leading-[100%] text-[#1E1D1D]">FitBit</h1>
                    <p className="text-[#8B8E99] w-[173px] font-medium text-[16px] leading-[20px] mt-2">FitBit smart watches are best for there health and fitness features.</p>
                </div>
            </div>
        </div>
    )
} 