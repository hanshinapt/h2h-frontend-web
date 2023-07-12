import { getThemeGameList } from "@/api/gameAPI";
import { GameType } from "@/interface/gameInterface";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Theme = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const themeId = location.pathname.split("/").at(-1);
    const themeName = location.state.themeName;
    const [games, setGames] = useState<GameType[]>([]);

    const handleClickGame = (gameId: string) => {
        navigate("/gameDetail", { state: { gameId } });
    };

    const fetchGames = async (themeId: string) => {
        const data = await getThemeGameList(themeId);
        if (data) setGames(data);
    };

    useEffect(() => {
        if (themeId) fetchGames(themeId);
    }, [themeId]);

    return (
        <ThemeContainer>
            <ThemeTitle>#{themeName}</ThemeTitle>
            <Games>
                {games.map(({ id, imageUrl, title, description }) => (
                    <GameBox key={id} onClick={() => handleClickGame(id)}>
                        <GameImg src={imageUrl} />
                        <div>
                            <GameTitle>{title}</GameTitle>
                            <GameDesc>{description}</GameDesc>
                        </div>
                    </GameBox>
                ))}
            </Games>
        </ThemeContainer>
    );
};

export default Theme;

const ThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 12px;
    gap: 24px;
`;

const ThemeTitle = styled.h1`
    text-align: center;
    font-size: 24px;
`;

const Games = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const GameBox = styled.article`
    display: flex;
    gap: 10px;
    height: 70px;

    padding: 10px;
    border: 1px solid var(--color-grey);
    border-radius: 8px;
`;

const GameImg = styled.img`
    height: 100%;
    aspect-ratio: 1/1;
`;

const GameTitle = styled.h3`
    font-size: 18px;
    color: var(--color-primary);
    margin-bottom: 6px;
`;

const GameDesc = styled.p`
    font-size: 14px;
    font-family: var(--font-light);

    line-height: 110%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;
