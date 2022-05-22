import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry, description, value }) => {
  return (
    <Button.Group style={{ marginTop: 10 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(description, value)}>
        Add
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
