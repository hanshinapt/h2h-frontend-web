import { request } from "./config";
import heartSVG from "@/assets/themeIcons/heart.svg";
import mapSVG from "@/assets/themeIcons/map.svg";
import houseSVG from "@/assets/themeIcons/house.svg";
import lightbulbSVG from "@/assets/themeIcons/lightbulb.svg";

export const getThemeTypes = async () => {
    const res = await request({
        method: "GET",
        url: "tags",
    });

    const tempRes = res.map((i: object) => {
        return { ...i, icon: heartSVG };
    });

    const temp = [
        ...tempRes,
        { id: "644ba0fe2bb7ffb7fae66650", name: "취미", icon: houseSVG },
        { id: "644ba0fe2bb7ffb7fae66651", name: "밸런스", icon: lightbulbSVG },
        { id: "644ba0fe2bb7ffb7fae66652", name: "여행", icon: heartSVG },
        { id: "644ba0fe2bb7ffb7fae66653", name: "가족", icon: mapSVG },
        { id: "644ba0fe2bb7ffb7fae66654", name: "커리어", icon: houseSVG },
        {
            id: "644ba0fe2bb7ffb7fae66655",
            name: "자기개발",
            icon: lightbulbSVG,
        },
    ];

    return temp;
};
