import './index.css';

interface DataCardProps {
  title: string;
  linkText?: string;
  children: React.ReactNode;
}

const DataCard = ({
  title,
  linkText,
  children,
}: DataCardProps) => {
  return (
    <section className="data-card">
      <div className="data-card-header">
        <h2>{title}</h2>

        {linkText && (
          <button className="data-card-link" type="button">
            {linkText} →
          </button>
        )}
      </div>

      <div className="data-card-table">
        {children}
      </div>
    </section>
  );
};

export default DataCard;
