import React from "react";
import ReactDOM from "react-dom";
import TagsInput from "react-tagsinput";
import "../components/compostyle.css";
import { Formik, Form } from "formik";

export default class Tagsinput extends React.Component {
  constructor() {
    super();
    this.state = { tags: [] };
  }

  handleChange = (tags) => {
    console.log(tags);
    this.setState({ tags });
  };

  render() {
    console.log(this.state);
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.onSubmit}
        render={({ 
          values, 
          handleSubmit, 
          setFieldValue 
        }) => (
          <Form onSubmit={handleSubmit} noValidate name="simpleForm">
            <TagsInput
              name="tags"
              value={values.tags}
              onChange={(tags) => {
                console.log(tags);
                setFieldValue("tags", tags);
              }}
            />
          </Form>
        )}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tagsinput />, rootElement);
