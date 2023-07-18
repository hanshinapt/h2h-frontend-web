import { getGameInfo } from "@/api/gameAPI";
import { GameType } from "@/interface/gameInterface";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import LogoIcon from "@/assets/logo.png";

const GameEntry = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [gameInfo, setGameInfo] = useState<GameType>();

    const { gameId } = location.state;

    const fetchGameInfo = async (gameId: string) => {
        const data = await getGameInfo(gameId);
        if (data) setGameInfo(data);
    };

    const handleClickPlay = () => {
        navigate(`/game/${gameId}`);
    };

    useEffect(() => {
        if (gameId) fetchGameInfo(gameId);
    }, [gameId]);

    return (
        <GameEntryContainer>
            <Logo src={LogoIcon} />
            <Gradient>
                <GameImg src={gameInfo?.imageUrl} />
            </Gradient>
            <GameContents>
                <GameTitle>{gameInfo?.title}</GameTitle>
                <GameDesc>{gameInfo?.description}</GameDesc>
            </GameContents>
            <PlayButton onClick={handleClickPlay}>이 게임 시작하기</PlayButton>
        </GameEntryContainer>
    );
};

export default GameEntry;

const GameEntryContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
`;

const Gradient = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    background: radial-gradient(
        circle closest-side at 50% 50%,
        var(--color-primary),
        white
    );
`;

const GameContents = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const GameImg = styled.img`
    width: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
`;

const GameTitle = styled.h1`
    font-size: 26px;
    color: var(--color-primary);
`;

const GameDesc = styled.p`
    font-family: var(--font-light);
`;

const PlayButton = styled.button`
    position: absolute;
    bottom: 30px;
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 18px;
    font-family: var(--font-regular);
    background-color: var(--color-primary);
`;
