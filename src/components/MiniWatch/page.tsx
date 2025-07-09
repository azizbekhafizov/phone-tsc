import Image from "next/image";


export default function MiniWatch() {
    return (
        <div className="flex w-[80%] justify-center mx-auto gap-6">
            <div className="flex items-center justify-center h-[239px] rounded-[22px] bg-[#F6F6F6] w-[354px]">
                <img src="/assets/images/apple.png" alt="" />
                <h1>Apple</h1>
                <p>Apple is one of the most famous smart watches providing company.</p>
            </div>

            <div className="flex items-center justify-center h-[239px] rounded-[22px] bg-[#F6F6F6] w-[354px]">
                <img src="/assets/images/xiomi.png" alt="" />
                <h1>Xiaomi</h1>
                <p>Xiaomi smart watches are produced by MI company.</p>
            </div>

            <div className="flex items-center justify-center h-[239px] rounded-[22px] bg-[#F6F6F6] w-[354px]">
                <img src="/assets/images/fitbit.png" alt="" />
                <h1>FitBit</h1>
                <p>FitBit smart watches are best for there health and fitness features.</p>
            </div>
        </div>
    )
} 