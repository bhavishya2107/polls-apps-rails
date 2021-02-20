import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import pollsApi from "apis/poll";

function CreatePollForm(props) {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await pollsApi.create({
        poll: {
          question: question,
          options_attributes: [
            { name: option1 },
            { name: option2 },
            { name: option3 },
            { name: option4 },
          ],
        },
      });
      setLoading(false);
      props.history.push("/");
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center px-4 py-6 lg:px-8 bg-gray-50 sm:px-6">
        <div className="w-full max-w-lg border border-gray-300 rounded-md bg-white p-8 rounded-lg shadow-lg w-full">
          <h1 className="text-2xl text-center">Poll Form</h1>
          <Input
            label="Question"
            placeholder="Enter question for the poll. "
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
          <Input
            label="Option 1"
            placeholder="Enter option 1"
            onChange={(e) => setOption1(e.target.value)}
            value={option1}
          />
          <Input
            label="Option 2"
            placeholder="Enter option 2"
            onChange={(e) => setOption2(e.target.value)}
            value={option2}
          />
          <Input
            label="Option 3"
            placeholder="Enter option 3"
            onChange={(e) => setOption3(e.target.value)}
            value={option3}
          />
          <Input
            label="Option 4"
            placeholder="Enter option 4"
            onChange={(e) => setOption4(e.target.value)}
            value={option4}
          />
          <Button
            buttonText="Create Poll"
            loading={loading}
            onClick={handleSubmit}
          />
        </div>
      </div>
      {errors ? <p className="text-xl text-red-500 text-center">{errors[0]}</p> : null}
    </div>
  );
}

export default CreatePollForm;
