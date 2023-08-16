/* eslint-disable react/prop-types */
import Papa from "papaparse";
import { useState } from "react";

const PreviewForm = ({
  data,
  setFileData,
  setFileUpload,
  setToggle,
  toggle,
}) => {
  const { name, description, client, constructor } = data;

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLine: true,
      complete: (results) => {
        setFileData(results.data);
        setFileUpload(true);
      },
    });
  };

  const handleToggle = (event) => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input
            readOnly
            placeholder={name}
            name="name"
            type="text"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project description</span>
          </label>
          <input
            readOnly
            placeholder={description}
            name="description"
            type="text"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Client</span>
          </label>
          <input
            readOnly
            placeholder={client}
            name="client"
            type="text"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Constructor</span>
          </label>
          <input
            readOnly
            placeholder={constructor}
            name="constructor"
            type="text"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">File upload</span>
          </label>
          <div>
            <input
              type="file"
              name="file"
              accept=".csv"
              onChange={handleFile}
              className="file-input
            file-input-bordered w-full max-w-xs"
            />
            <div className="form-control w-52">
              <label className="label cursor-pointer">
                <span className="label-text">Manually insert</span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={handleToggle}
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PreviewForm;
