import { useContext } from "react";
import { BiMessageDots } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { PiArchiveBold, PiVideoCameraBold } from "react-icons/pi";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router";
import { TimelineContext } from "../../Context/TimelineContext";
import { toast } from "react-toastify";

const FriendsDetailsPage = () => {
    const { id } = useParams();
    // console.log(id);

    const freindsData = useLoaderData()
    // console.log(freindsData);
    const targetedFriend = freindsData.find(friend => friend.id === parseInt(id));
    // console.log(targetedFriend);
    const {timelineData, setTimelineData} = useContext(TimelineContext);
    // console.log("timelineData:", timelineData, "setTimelineData :", setTimelineData);
    const handleAddTimelineData = (type, timelineDetails) => {
            // console.log("type:", type, "timelineData:", timelineData);
            const newTimelineData = {
                ...timelineDetails,
                Action: type,
                time: new Date().toDateString()
            }
            // console.log(newTimelineData);
            setTimelineData([...timelineData, newTimelineData]);
            // console.log(timelineDetails.name);

            toast.success(`${type} with ${timelineDetails.name} Added to timeline`);            
    }
    // console.log(timelineData);
    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 grid-rows-8 gap-6">
                <div className="px-8 col-span-3 row-span-4 text-center p-6 space-y-1 bg-white rounded-md shadow h-full flex flex-col justify-between">
                    <div className="img-and-name">
                        <div className="w-20 h-20 mx-auto">
                            <img src={targetedFriend.picture} alt="" className="w-full h-full rounded-full" />
                        </div>
                        <h3 className="text-xl font-semibold">{targetedFriend.name}</h3>
                    </div>
                    <div className={`w-fit mx-auto capitalize text-[0.75rem] py-1.5 px-2 rounded-full font-medium text-white ${targetedFriend.status === "almost due" ? "bg-[#EFAD44]" :
                        targetedFriend.status === "overdue" ? "bg-[#EF4444]" : "bg-[#244D3F]"
                        }`}>{targetedFriend.status}</div>
                    <div className="flex flex-row sm:flex sm:flex-row md:flex md:flex-col lg:flex-row gap-1 justify-center items-center">
                        {
                            targetedFriend.tags.map((tag, ind) => {
                                return <div key={ind} className="text-[0.75rem] text-[#244D3F] uppercase p-1.5 bg-[#CBFADB] rounded-full">{tag}</div>
                            })
                        }
                    </div>
                    <div>
                        <p className="text-[#64748B] text-base italic">"{targetedFriend.bio}"</p>
                        <small className="text-[#64748B] text-sm">Preferred: {targetedFriend.email}</small>
                    </div>
                </div>
                <div className="py-4 px-8 bg-white rounded-md shadow row-span-2 col-span-2 flex flex-col text-center justify-center items-center">
                    <h1 className="text-[#244D3F] font-semibold text-3xl">{targetedFriend.days_since_contact}</h1>
                    <p className="text-lg text-[#64748B]">Days Since Contact</p>
                </div>
                <div className="py-4 px-8 bg-white rounded-md shadow row-span-2 col-span-2 flex flex-col text-center justify-center items-center">
                    <h1 className="text-[#244D3F] font-semibold text-3xl">{targetedFriend.goal}</h1>
                    <p className="text-lg text-[#64748B]">Goal Days</p>
                </div>
                <div className="py-4 px-8 bg-white rounded-md shadow row-span-2 col-span-2 flex flex-col text-center justify-center items-center">
                    <h1 className="text-[#244D3F] font-semibold text-3xl">{targetedFriend.next_due_date}</h1>
                    <p className="text-lg text-[#64748B]">Next Due</p>
                </div>
                <div className="py-4 px-8 bg-white rounded-md shadow col-span-6 row-span-2 flex flex-col justify-center">
                    <div className="flex justify-between">
                        <h2 className="text-[#244D3F] text-xl font-medium">Relationship Goal</h2>
                        <button className="btn">Edit</button>
                    </div>
                    <p className="text-lg text-[#64748B]">Connect every <span className="text-black font-bold">30 days</span></p>
                </div>
                <div className="py-4 px-8 bg-white rounded-md shadow col-start-1 col-span-3 flex gap-2 items-center justify-center text-base font-medium"><RiNotificationSnoozeLine/> Snooze 2 weeks</div>
                <div className="py-4 px-8 bg-white rounded-md shadow col-start-1 col-span-3 flex gap-2 items-center justify-center text-base font-medium"><PiArchiveBold/> Archive</div>
                <div className="py-4 px-8 bg-white rounded-md shadow col-start-1 col-span-3 flex gap-2 items-center justify-center text-base font-medium text-red-600"><RiDeleteBinLine/> Delete</div>
                <div className="py-4 px-8 bg-white rounded-md shadow col-start-4 row-start-5 col-span-6 row-span-3 flex flex-col justify-center gap-4">
                    <h2 className="text-xl text-[#244D3F] font-medium">Quick Check-In</h2>
                    <div className="grid grid-cols-3 gap-4">
                         <Link to={""} className="p-4 bg-[#F8FAFC] border-[#E9E9E9] border rounded-md shadow text-lg flex flex-col justify-center items-center" onClick={() => handleAddTimelineData("Call", targetedFriend)}><FiPhoneCall/>Call</Link>
                         <Link to={""} className="p-4 bg-[#F8FAFC] border-[#E9E9E9] border rounded-md shadow text-lg flex flex-col justify-center items-center" onClick={() => handleAddTimelineData("Text", targetedFriend)}><BiMessageDots />Text</Link>
                         <Link to={""} className="p-4 bg-[#F8FAFC] border-[#E9E9E9] border rounded-md shadow text-lg flex flex-col justify-center items-center" onClick={() => handleAddTimelineData("Video", targetedFriend)}><PiVideoCameraBold />Video</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendsDetailsPage;