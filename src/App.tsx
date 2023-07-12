import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "@/style/globalStyle";
import Main from "@/pages/main";
import Welcome from "@/pages/welcome";
import Theme from "@/pages/theme";
import GameEntry from "@/pages/gameEntry";
import GameQuestion from "./pages/gameQuestion";

const App = () => {
    return (
        <AppContainer className="scrollYHidden">
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/theme/:id" element={<Theme />} />
                    <Route path="/gameDetail" element={<GameEntry />} />
                    <Route path="/game" element={<GameQuestion />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    );
};

export default App;

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: var(--font-regular);
`;
