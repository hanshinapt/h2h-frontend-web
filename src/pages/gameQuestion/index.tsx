import { getGameInfo } from "@/api/gameAPI";
import { QuestionType } from "@/interface/gameInterface";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import LogoIcon from "@/assets/logo.png";
import { ReactComponent as BackIcon } from "@/assets/back.svg";
import { ReactComponent as ForwardIcon } from "@/assets/forward.svg";
import GameExitModal from "./gameExitModal";

const GameQuestion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const gameId = location.pathname.split("/").at(-1);
    const [gameQuestions, setGameQuestions] = useState<QuestionType[]>([]);
    const [curIdx, setCurIdx] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const fetchGameInfo = async (gameId: string) => {
        const data = await getGameInfo(gameId);
        if (data) setGameQuestions(data.questions);
    };

    const handleClickBackButton = () => {
        if (curIdx > 0) setCurIdx(curIdx - 1);
        else setIsOpenModal(true);
    };

    const handleClickForwardButton = () => {
        if (curIdx < gameQuestions.length - 1) setCurIdx(curIdx + 1);
        else navigate("/gameEnd", { state: { gameId } });
    };

    useEffect(() => {
        if (gameId) fetchGameInfo(gameId);
    }, [gameId]);

    return (
        <GameQuestionContainer>
            <GameQuestionHeader>
                <Logo src={LogoIcon} />
                <QuestionIndex>{curIdx + 1}번째 질문</QuestionIndex>
            </GameQuestionHeader>

            <Gradient>
                <Question>{gameQuestions[curIdx]?.content}</Question>
            </Gradient>

            <ButtonsSection>
                <MoveButton onClick={handleClickBackButton}>
                    <BackIcon />
                </MoveButton>
                <MoveButton onClick={handleClickForwardButton}>
                    <ForwardIcon />
                </MoveButton>
            </ButtonsSection>

            <GameExitModal
                isOpen={isOpenModal}
                onClose={() => setIsOpenModal(false)}
            />
        </GameQuestionContainer>
    );
};

export default GameQuestion;

const GameQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const GameQuestionHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
`;

const QuestionIndex = styled.span``;

const Question = styled.p``;

const Gradient = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(
        circle closest-side at 50% 50%,
        #06ad5430,
        white
    );
`;

const ButtonsSection = styled.div`
    display: flex;
    gap: 50px;
    padding-bottom: 40px;
`;

const MoveButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: var(--color-primary-light);
    border: none;
    border-radius: 50%;
`;
