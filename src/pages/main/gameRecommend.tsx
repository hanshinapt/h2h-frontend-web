import { getCategorizedGames } from "@/api/gameAPI";
import { CategoryType } from "@/interface/categoryInterface";
import { GameType } from "@/interface/gameInterface";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface GameRecommendProps {
    idx: number;
    category: CategoryType;
}

const GameRecommend = ({ idx, category }: GameRecommendProps) => {
    const { name, desc, type } = category;
    const navigate = useNavigate();
    const [games, setGames] = useState<GameType[]>();

    const handleClickCard = (id: string) => {
        navigate(`/game/${id}`);
    };

    const getBGColor = () => {
        const bgColorPallete = [
            "var(--color-primary-light)",
            "var(--color-grey-light)",
        ];
        return bgColorPallete[idx];
    };

    const fetchCategorizedGames = async () => {
        const data = await getCategorizedGames(type);
        if (data) setGames(data);
    };

    useEffect(() => {
        if (type) fetchCategorizedGames();
    }, []);

    return (
        <GameRecommendContainer>
            <CategoryTitle>{name}</CategoryTitle>
            <CategoryDesc>{desc}</CategoryDesc>

            <CardsSection className="scrollXHidden" bgColor={getBGColor()}>
                {games?.map(
                    ({ id, title, description, imageUrl }: GameType) => (
                        <GameCard key={id} onClick={() => handleClickCard(id)}>
                            <GameImg src={imageUrl} />
                            <GameTitle>{title}</GameTitle>
                            <GameDesc>{description}</GameDesc>
                        </GameCard>
                    ),
                )}
            </CardsSection>
        </GameRecommendContainer>
    );
};

export default GameRecommend;

const GameRecommendContainer = styled.div`
    margin: 36px 0;
`;

const CategoryTitle = styled.h1`
    padding: 0px 20px 8px;
    font-size: 22px;
    font-family: var(--font-regular);
`;

const CategoryDesc = styled.p`
    padding: 0 20px;
    font-size: 15px;
    font-family: var(--font-light);
`;

const CardsSection = styled.section<{ bgColor: string }>`
    display: flex;
    gap: 20px;
    padding: 0px 20px;
    margin-top: 20px;

    article {
        background-color: ${(props) => props.bgColor};
    }
`;

const GameCard = styled.article`
    display: flex;
    flex-direction: column;
    flex: 0 0 100px;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
`;

const GameImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
`;

const GameTitle = styled.h5`
    width: calc(100px - 10px); // card width - padding
    font-size: 16px;

    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const GameDesc = styled.p`
    width: calc(100px - 10px); // card width - padding
    font-size: 14px;
    font-family: var(--font-light);

    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;
