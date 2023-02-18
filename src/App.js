import Form from "./components/form";
import Comment from "./components/comment";
import Confirm from "./components/confirm";
import "./style/main.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
    isChecked: false,
  });

  const [formArray, setFormArray] = useState([]);

  return (
    <div className="App">
      <div className="App-left">
        <Form
          formData={formData}
          setFormData={setFormData}
          formArray={formArray}
          setFormArray={setFormArray}
        />
        <Comment formArray={formArray} setFormArray={setFormArray} />
      </div>
      <div className="App-right">
        <Confirm formArray={formArray} setFormArray={setFormArray} />
      </div>
    </div>
  );
}

export default App;
