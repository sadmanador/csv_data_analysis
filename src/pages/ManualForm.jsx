/* eslint-disable react/prop-types */


const ManualForm = ({ setFileData }) => {


  const handleSubmit = (event) => {
    event.preventDefault();
    const minX = event.target.x_min.value;
    const maxX = event.target.x_max.value;
    const minY = event.target.y_min.value;
    const maxY = event.target.y_max.value;
    const minZ = event.target.z_min.value;
    const maxZ = event.target.z_max.value;

    const data = [
      {
        KP: 0,
        X: minX,
        Y: minY,
        Z: minZ,
      },
      {
        KP: 1,
        X: maxX,
        Y: maxY,
        Z: maxZ,
      },
    ];

    setFileData(data);
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto ">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">X</span>
            </label>
            <div className="space-x-4">
              <input
                required
                name="x_min"
                type="text"
                placeholder="min"
                className="input input-bordered"
              />
              <input
                required
                name="x_max"
                type="text"
                placeholder="max"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Y</span>
            </label>
            <div className="space-x-4">
              <input
                required
                name="y_min"
                type="text"
                placeholder="min"
                className="input input-bordered"
              />
              <input
                required
                name="y_max"
                type="text"
                placeholder="max"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Z</span>
            </label>
            <div className="space-x-4">
              <input
                required
                name="z_min"
                type="text"
                placeholder="min"
                className="input input-bordered"
              />
              <input
                required
                name="z_min"
                type="text"
                placeholder="max"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManualForm;
