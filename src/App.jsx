import { useState } from "react";
import Form from "./pages/Form";
import Navbar from "./pages/Navbar";
import PreviewForm from "./pages/PreviewForm";
import Table from "./pages/Table";
import ManualForm from "./pages/ManualForm";

function App() {
  const [fileData, setFileData] = useState([]);
  const [dataFilled, setDataFilled] = useState(false);
  const [data, setData] = useState(null);
  const [fileUpload, setFileUpload] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log("toggle",fileData)

  return (
    <>
      <Navbar />
      {data === null && (
        <Form setDataFilled={setDataFilled} setData={setData}></Form>
      )}
      {(data !== null && !fileUpload) && (
        <PreviewForm
          data={data}
          setFileData={setFileData}
          setFileUpload={setFileUpload}
          setToggle={setToggle}
          toggle={toggle}
        ></PreviewForm>
        )}
        {toggle && <ManualForm setFileData={setFileData}/>}
      {fileUpload && <Table fileData={fileData}/>}
    </>
  );
}

export default App;
