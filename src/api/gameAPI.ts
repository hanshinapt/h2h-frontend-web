import { GameType } from "@/interface/gameInterface";
import { request } from "./config";

const temp = [
    {
        id: "645343c12bb7ffb7fae66665",
        title: "연인을 위한 대화카드",
        description:
            "커플끼리 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다.",
        tagIds: ["644ba0fe2bb7ffb7fae66656"],
        imageUrl: "https://h2h-dev.s3.ap-northeast-2.amazonaws.com/love.jpg",
        playedCount: 125,
        createdAt: "Tue Apr 18 09:40:03 UTC 2023",
        createdBy: "admin",
        questions: [
            { content: "현재 나의 최대 관심사는 무엇인가요?" },
            { content: "가보고 싶은 장소가 있나요?" },
        ],
    },
    {
        id: "645343c12bb7ffb7fae66666",
        title: "연인을 위한 대화카드",
        description:
            "커플끼리 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다. 커플끼리 해보면 좋을 대화카드입니다.",
        tagIds: ["644ba0fe2bb7ffb7fae66656"],
        imageUrl: "https://h2h-dev.s3.ap-northeast-2.amazonaws.com/love.jpg",
        playedCount: 125,
        createdAt: "Tue Apr 18 09:40:03 UTC 2023",
        createdBy: "admin",
        questions: [
            { content: "현재 나의 최대 관심사는 무엇인가요?" },
            { content: "가보고 싶은 장소가 있나요?" },
        ],
    },
    {
        id: "645343c12bb7ffb7fae66667",
        title: "연인을 위한 대화카드",
        description: "커플끼리 해보면 좋을 대화카드입니다.",
        tagIds: ["644ba0fe2bb7ffb7fae66656"],
        imageUrl: "https://h2h-dev.s3.ap-northeast-2.amazonaws.com/love.jpg",
        playedCount: 125,
        createdAt: "Tue Apr 18 09:40:03 UTC 2023",
        createdBy: "admin",
        questions: [
            { content: "현재 나의 최대 관심사는 무엇인가요?" },
            { content: "가보고 싶은 장소가 있나요?" },
        ],
    },
];

export const getCategorizedGames = async (
    type: string,
): Promise<GameType[]> => {
    if (type === "most-liked") return temp;

    const res = await request({
        method: "GET",
        url: "decks",
        params: { sort: type, count: 2 },
    });

    return [...temp, ...res];
};

export const getThemeGameList = async (
    themeId: string,
): Promise<GameType[]> => {
    const res = await request({
        method: "GET",
        url: "decks",
        params: { tag: themeId },
    });

    return [...temp, ...res];
};

export const getGameInfo = async (gameId: string): Promise<GameType> => {
    const res = await request({
        method: "GET",
        url: `decks/${gameId}`,
    });

    return res;
};
