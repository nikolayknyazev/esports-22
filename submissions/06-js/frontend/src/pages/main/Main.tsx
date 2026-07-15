import './Main.css';

import { ThemeSwitcher } from '../../components/ThemeSwitcher';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            Задание для студентов
            <ThemeSwitcher />
        </div>
    );
};
