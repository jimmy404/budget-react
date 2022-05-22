import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shinny thing"
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="0.00"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
