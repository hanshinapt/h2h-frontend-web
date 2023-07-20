import useClickOutside from "@/hooks/useClickOutside";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface GameExitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GameExitModal = ({ isOpen, onClose }: GameExitModalProps) => {
    const gameExitModalRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const gameId = location.pathname.split("/").at(-1);
    const exit = () => {
        navigate("/gameDetail", { state: { gameId } });
    };

    useClickOutside({ targetRef: gameExitModalRef, onClose });

    if (isOpen)
        return (
            <GameExitModalContainer ref={gameExitModalRef}>
                <Text>
                    <p>게임이 진행중이에요.</p>
                    <p>정말 게임을 떠나실 건가요?</p>
                </Text>
                <Buttons>
                    <ExitButton onClick={exit}>게임 떠나기</ExitButton>
                    <KeepPlayingButton onClick={onClose}>
                        계속 진행하기
                    </KeepPlayingButton>
                </Buttons>
            </GameExitModalContainer>
        );
};

export default GameExitModal;

const GameExitModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height: 150px;
    padding: 30px 0 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: white;
    border: 1px solid var(--color-grey);
    border-radius: 10px;
`;

const Text = styled.section`
    text-align: center;
    line-height: 120%;
`;

const Buttons = styled.div`
    display: flex;
    gap: 16px;
`;

const ExitButton = styled.button`
    box-sizing: content-box;
    color: var(--color-primary);
    font-family: var(--font-regular);
    border: 1px solid var(--color-primary);
    background-color: var(--color-grey-light);
    border-radius: 20px;
    padding: 10px 20px;
`;

const KeepPlayingButton = styled.button`
    box-sizing: content-box;
    color: white;
    font-family: var(--font-regular);
    background-color: var(--color-primary);
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
`;
