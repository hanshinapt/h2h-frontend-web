import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const GameEnd = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { gameId } = location.state;

    const goToGameStart = () => {
        navigate(`/game/${gameId}`);
    };

    const goToMainPage = () => {
        navigate("/");
    };

    return (
        <GameEndContainer>
            <Text>
                <p>모든 질문이 끝났습니다!</p>
                <p>이 대화를 통해 좀 더 가까워지셨나요?</p>
                <p>heartToheart를 통해 서로를 더 많이 알아가보세요.</p>
            </Text>

            <ResetButton onClick={goToGameStart}>
                처음부터 다시 시작하기
            </ResetButton>
            <ExitButton onClick={goToMainPage}>다른 게임 하러가기</ExitButton>
        </GameEndContainer>
    );
};

export default GameEnd;

const GameEndContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const Text = styled.section`
    font-size: 14px;
    font-family: var(--font-light);
    text-align: center;
    line-height: 150%;
`;

const ResetButton = styled.button`
    width: 75%;
    box-sizing: content-box;
    color: var(--color-primary);
    font-family: var(--font-regular);
    background-color: white;
    border: 1px solid var(--color-primary);
    border-radius: 25px;
    padding: 15px 20px;
`;

const ExitButton = styled.button`
    width: 75%;
    box-sizing: content-box;
    color: white;
    font-family: var(--font-regular);
    background-color: var(--color-primary);
    border: none;
    border-radius: 25px;
    padding: 15px 20px;
`;
