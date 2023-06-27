import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "@/style/globalStyle";
import Main from "@/pages/main";
import Welcome from "@/pages/welcome";
import GameEntry from "@/pages/gameEntry";
import GameQuestion from "./pages/gameQuestion";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/gameDetail" element={<GameEntry />} />
                <Route path="/game" element={<GameQuestion />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
