import { useState } from "react";
import "./Inquiry.css";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Inquiry = () => {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Please enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
      </Form>
    </>
  );
};

export default Inquiry;
