import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'

const JobApply = () => {
  const { id } = useParams();

  const { user } = useAuth();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
    };

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "Job Application successfully sent",
            icon: "success"
          });
        }
      });
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={submitJobApplication}>
              <h1 className="text-5xl font-bold text-center">
                Apply Job And Good Luck!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Linkedin URL</span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  placeholder="Linkedin URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input
                  type="url"
                  name="github"
                  placeholder="Github URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
