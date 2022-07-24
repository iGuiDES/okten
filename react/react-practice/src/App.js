import {Route, Routes, Navigate} from 'react-router-dom';
import {MainLayout} from "./layout";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

const App = () => {
    
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<Navigate to={'login'} />} />
                <Route path={'login'} element={<LoginPage />}/>
                <Route path={'register'} element={<RegisterPage />}/>
                <Route path={'cars'} element={<CarsPage />}/>
            </Route>
        </Routes>
    )
}

export {
    App
}