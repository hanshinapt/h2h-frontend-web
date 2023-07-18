import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getThemeTypes } from "@/api/themeAPI";
import { ThemeTypes } from "@/interface/themeInterface";
import { CategoryType } from "@/interface/categoryInterface";
import ThemeSelect from "@/pages/main/themeSelect";
import GameRecommend from "@/pages/main/gameRecommend";

const Main = () => {
    const categories: CategoryType[] = [
        {
            id: 0,
            type: "most-liked",
            name: "FAVORITE GAME",
            desc: "HeartToHeart에서 가장 많이 좋아한 게임이에요.",
        },
        {
            id: 1,
            type: "most-played",
            name: "BEST GAME",
            desc: "HeartToHeart에서 가장 많이 플레이 된 게임이에요.",
        },
    ];
    const [themeTypes, setThemeTypes] = useState<ThemeTypes[]>();

    const fetchThemeTypes = async () => {
        const data = await getThemeTypes();
        if (data) setThemeTypes(data);
    };

    useEffect(() => {
        fetchThemeTypes();
    }, []);

    return (
        <MainContainer>
            <Header>
                안녕하세요! <br /> 대화하고 싶은 테마를 선택하세요.
            </Header>
            <ThemeSelect themeTypes={themeTypes} />
            {categories.map((category, idx) => (
                <GameRecommend
                    key={category.id}
                    idx={idx}
                    category={category}
                />
            ))}
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.div`
    padding: 36px 0 0 0;
`;

const Header = styled.header`
    padding-bottom: 36px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
`;
