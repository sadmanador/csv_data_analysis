/* eslint-disable react/prop-types */
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Table = ({ fileData, data }) => {
  const maxX = fileData.reduce((max, obj) => {
    const currentX = parseFloat(obj.X);
    return currentX > max ? currentX : max;
  }, -Infinity);

  const minX = fileData.reduce((min, obj) => {
    const currentX = parseFloat(obj.X);
    return currentX < min ? currentX : min;
  }, Infinity);

  const minY = fileData.reduce((min, obj) => {
    const currentY = parseFloat(obj.Y);
    return currentY < min ? currentY : min;
  }, Infinity);

  const maxY = fileData.reduce((max, obj) => {
    const currentY = parseFloat(obj.Y);
    return currentY > max ? currentY : max;
  }, -Infinity);

  const minZ = fileData.reduce((min, obj) => {
    const currentZ = parseFloat(obj.Z);
    return currentZ < min ? currentZ : min;
  }, Infinity);

  const maxZ = fileData.reduce((max, obj) => {
    const currentZ = parseFloat(obj.Z);
    return currentZ > max ? currentZ : max;
  }, -Infinity);

  return (
    <div className="mx-auto max-w-2xl pt-20">
      <div className="overflow-x-auto">
        <div ref={ref}>
          <div className="text-center">
            <p className="font-semibold">Project Name: {data.name}</p>
            <p className="font-semibold">Project description:</p>
            <p>{data.description}</p>
            <p><span className="font-semibold">Client Name:</span> {data.client}</p>
            <p><span className="font-semibold">Constructor:</span> {data.constructor}</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>min</th>
                <th>max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>X</th>
                <td>{minX}</td>
                <td>{maxX}</td>
              </tr>
              <tr>
                <th>Y</th>
                <td>{minY}</td>
                <td>{maxY}</td>
              </tr>
              <tr>
                <th>Z</th>
                <td>{minZ}</td>
                <td>{maxZ}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                className="btn btn-primary normal-case shadow-2xl"
                onClick={toPdf}
              >
                Download PDF
              </button>
            )}
          </Pdf>
        </div>
      </div>
      {/* <div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={fileData}>
            <Bar dataKey="X"/>
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default Table;
