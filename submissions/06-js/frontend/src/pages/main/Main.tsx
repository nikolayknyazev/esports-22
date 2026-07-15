import './Main.css';

import { ThemeSwitcher } from '../../components/ThemeSwitcher';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className="title-with-cat">
                Задание для студентов
                <ThemeSwitcher />
            </div>
        </div>
    );
};
