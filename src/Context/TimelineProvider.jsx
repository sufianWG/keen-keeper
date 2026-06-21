    import { useState } from "react";
    import { TimelineContext } from "./TimelineContext";


    const TimelineProvider = ({ children }) => {
        const [timelineData, setTimelineData] = useState([]);
        return (
            <TimelineContext.Provider value={{timelineData, setTimelineData}}>
                {children}
            </TimelineContext.Provider>
        );
    };

    export default TimelineProvider;