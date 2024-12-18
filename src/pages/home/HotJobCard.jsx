import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRang,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="flex gap-2 mt-4">
          <figure>
            <img src={company_logo} className="w-16" alt={company} />
          </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p>{location}</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, idx) => (
              <p key={idx} className="border rounded-md text-center px-2">
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
