import React from "react";
import { Card } from "antd";

const FieldItem = ({ field }) => {
  return (
    <Card
      size="small"
      hoverable
      className="cursor-pointer mb-2"
      style={{ textAlign: "center" }}
    >
      {field.label}
    </Card>
  );
};

export default FieldItem;
