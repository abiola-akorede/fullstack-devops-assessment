import React from "react";
import { Input, Select, DatePicker } from "antd";

const FormPreview = ({ fields }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {fields.map((field) => {
        switch (field.type) {
          case "text":
            return <Input key={field.id} placeholder={field.label} className="mb-2" />;
          case "select":
            return <Select key={field.id} placeholder={field.label} className="w-full mb-2" />;
          case "date":
            return <DatePicker key={field.id} className="w-full mb-2" />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FormPreview;


// import React from "react";
// import { Input, Checkbox, DatePicker } from "antd";

// const FormPreview = ({ fields }) => {
//   return (
//     <div>
//       {fields.map((field) => (
//         <div key={field.id} style={{ marginBottom: "1rem" }}>
//           <label>{field.label}</label>
//           {field.type === "text" && <Input placeholder={field.label} />}
//           {field.type === "checkbox" && <Checkbox>{field.label}</Checkbox>}
//           {field.type === "date" && <DatePicker style={{ width: "100%" }} />}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormPreview;
