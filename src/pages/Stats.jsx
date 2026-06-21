import { RechartsDevtools } from "@recharts/devtools";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../Context/TimelineContext";


const Stats = () => {
    const { timelineData } = useContext(TimelineContext);

    // console.log(timelineData);

    const TextTypeData = timelineData.filter(item => item.Action === "Text");
    const CAllTypeData = timelineData.filter(item => item.Action === "Call");
    const VideoTypeData = timelineData.filter(item => item.Action === "Call");
    // console.log(typeof(TextTypeData.length));

    const data = [
        { name: "Text", value: TextTypeData.length, fill: "#7F37F5" },
        { name: "Call", value: CAllTypeData.length, fill: "#244D3F" },
        { name: "Video", value: VideoTypeData.length, fill: "#37A163" }
    ];
    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto py-20">
                <h1 className="mb-6 text-5xl font-bold text-center md:text-left">Friendship Analytics</h1>
                <div className="bg-white rounded-lg shadow p-8">
                    <div>
                        <h3 className="text-xl text-[#244D3F] font-medium text-center md:text-left">By Interaction Type</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center py-19">
                        <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} className="py-4" responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <RechartsDevtools />
                            <Legend></Legend>
                            <Tooltip></Tooltip>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;