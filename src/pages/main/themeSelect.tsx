import { ThemeTypes } from "@/interface/themeInterface";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface ThemeSelectProps {
    themeTypes?: ThemeTypes[];
}

const ThemeSelect = ({ themeTypes }: ThemeSelectProps) => {
    const navigate = useNavigate();

    const handleClick = ({ id, name }: { id: string; name: string }) => {
        navigate(`theme/${id}`, { state: { themeName: name } });
    };

    return (
        <ThemeSelectContainer>
            {themeTypes?.map(({ id, name, icon }) => (
                <ThemeButton key={id} onClick={() => handleClick({ id, name })}>
                    <img src={icon} />
                    <span>{name}</span>
                </ThemeButton>
            ))}
        </ThemeSelectContainer>
    );
};

export default ThemeSelect;

const ThemeSelectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; // column 1:1
    column-gap: 20px;
    row-gap: 20px;

    padding: 0px 20px;
`;

const ThemeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    gap: 4px;

    background-color: var(--color-white);
    border: 1px solid var(--color-grey);
    border-radius: 8px;

    font-size: 16px;
    font-family: var(--font-regular);
`;
