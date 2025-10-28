import React from "react";
import { Card } from "antd";

const DraggableField = ({ field }) => {
  return (
    <Card size="small" className="draggable-field">
      {field.label}
    </Card>
  );
};

export default DraggableField;
