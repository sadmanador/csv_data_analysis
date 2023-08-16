/* eslint-disable react/prop-types */
const Form = ({ setDataFilled, setData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const client = event.target.client.value;
    const constructor = event.target.constructor.value;

    const data = {
      name,
      description,
      client,
      constructor,
    };

    setData(data);
    setDataFilled(true);
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project description</span>
          </label>
          <input
            required
            name="description"
            type="text"
            placeholder="description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Client</span>
          </label>
          <input
            required
            name="client"
            type="text"
            placeholder="client"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Constructor</span>
          </label>
          <input
            required
            name="constructor"
            type="text"
            placeholder="constructor"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
