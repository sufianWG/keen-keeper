import { useContext } from "react";
import { IoChevronDown } from "react-icons/io5";
import { TimelineContext } from "../Context/TimelineContext";
import { RiMessage2Fill } from "react-icons/ri";
import { FcVideoCall } from "react-icons/fc";
import { PiPhoneCallFill } from "react-icons/pi";

const Timeline = () => {
    const { timelineData } = useContext(TimelineContext);
    // console.log(timelineData);
    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto py-20">
                <h1 className="text-5xl font-bold mb-6">Timeline</h1>
                <div className="relative w-full sm:max-w-[340px] md:max-w-[347px]">
                    <select name="" id="" className="filterPart border border-[#64748B]/15 rounded-md p-4 bg-transparent w-full text-lg text-[#9696A2] shadow appearance-none">
                        <option value="">Filter Timeline</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>

                    </select>
                    <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#9696A2]" />
                </div>
                <div className="timelineData space-y-6">
                    {
                        timelineData.map(item => {
                            return <div key={item.id} className="bg-white rounded-md shadow p-4 w-full mt-6 flex gap-4 items-center">
                                <div className="dataicon text-4xl text-[#244D3F]">
                                    {
                                        item.Action === "Text" ? <RiMessage2Fill /> :
                                            item.Action === "Call" ? <PiPhoneCallFill /> : <FcVideoCall />
                                    }
                                </div>
                                <div className="datainfo">
                                    <h3> <span className="text-xl font-medium text-[#244D3F]">{item.Action}</span> <small className="text-[#64748B] text-lg">with <span>{item.name}</span></small></h3>
                                    <small className="text-base text-[#64748B] font-medium">{item.time}</small>
                                </div>
                            </div>

                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Timeline;