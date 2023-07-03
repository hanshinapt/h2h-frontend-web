import styled from "styled-components";
import LogoIcon from "@/assets/logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/"), 2000);
    }, []);

    return (
        <WelcomeContainer>
            <Logo src={LogoIcon} />
            <AppDesc>서로를 알아가는 마음의 대화</AppDesc>
            <AppName>HeartToHeart</AppName>
        </WelcomeContainer>
    );
};

export default Welcome;

const WelcomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Logo = styled.img`
    width: 75px;
    height: 75px;
    margin: 10px 0;
`;

const AppDesc = styled.p`
    font-size: 12px;
`;

const AppName = styled.div`
    color: var(--color-primary);
    font-weight: 500;
    font-size: 24px;
`;
