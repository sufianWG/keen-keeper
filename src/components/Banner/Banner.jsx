import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto pt-20 pb-10">
                <div className="bannerInfo space-y-8 text-center pb-10">
                    <h1 className="text-5xl font-bold ">Friends to keep close in your life</h1>
                    <p className="text-base text-[#64748B] ">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                    <button className="py-3 px-4 text-white font-semibold rounded-md bg-[#244D3F] flex items-center gap-1 mx-auto cursor-pointer"> <FaPlus /> Add a Friend</button>
                </div>
                <div className="infoCards grid grid-cols-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="text-center bg-white p-8 rounded-md shadow">
                        <h3 className="font-semibold text-3xl text-[#244D3F]">10</h3>
                        <p className="text-[1.125rem] text-[#64748B]">Total Friends</p>
                    </div>
                    <div className="text-center bg-white p-8 rounded-md shadow">
                        <h3 className="font-semibold text-3xl text-[#244D3F]">3</h3>
                        <p className="text-[1.125rem] text-[#64748B]">On Track</p>
                    </div>
                    <div className="text-center bg-white p-8 rounded-md shadow">
                        <h3 className="font-semibold text-3xl text-[#244D3F]">6</h3>
                        <p className="text-[1.125rem] text-[#64748B]">Need Attention</p>
                    </div>
                    <div className="text-center bg-white p-8 rounded-md shadow">
                        <h3 className="font-semibold text-3xl text-[#244D3F]">12</h3>
                        <p className="text-[1.125rem] text-[#64748B]">Interactions This Month</p>
                    </div>
                </div>
                <hr className="mt-10 text-gray-200" />
            </div>
        </div>
    );
};

export default Banner;