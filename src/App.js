import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {AboutPage, MovieDetailsPage, MoviePage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";

function App() {

    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviePage/>}>
                        <Route path={':id'} element={<MovieDetailsPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Routes>
        </div>
    );
}

export default App;
