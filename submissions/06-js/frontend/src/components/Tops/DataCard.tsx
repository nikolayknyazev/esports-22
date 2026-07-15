import './index.css';

import { Link } from "react-router-dom"

interface DataCardProps {
  title: string;
  linkText?: string;
  linkTo?: string;
  children: React.ReactNode;
}

const DataCard = ({
  title,
  linkText,
  linkTo,
  children
}: DataCardProps) => {
  return (
    <div className="data-card">
      <div className="data-card-header">
        <span>{title}</span>

        {linkTo && (
          <Link className="data-card-link" to={linkTo}>
            {linkText} →
          </Link>
        )}
      </div>

      <div className="data-card-table">
        {children}
      </div>
    </div>
  );
};

export default DataCard;