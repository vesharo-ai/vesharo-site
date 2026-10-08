import Link from "@/components/common/Link";

interface ServiceCardProps {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  link: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  capabilities,
  link,
  icon,
}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="tz-service1-card">
        <div className="tz-service1-card__shape d-flex justify-content-center">
          <span className="tz-service1-card__icon" aria-hidden="true">
            <i className={`ph ${icon}`} />
          </span>
        </div>
        <Link
          href={link}
          className="tz-service1-card__link"
          aria-label={`Request scope for ${title}`}
        >
          <span className="tz-service1-card__number">{number}</span>
          <h3 className="tz-service1-card__title text-uppercase">
            {title}
          </h3>
          <p className="tz-service1-card__desc fw-medium tz-text-l">
            {description}
          </p>
          <ul className="tz-service1-card__caps">
            {capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
