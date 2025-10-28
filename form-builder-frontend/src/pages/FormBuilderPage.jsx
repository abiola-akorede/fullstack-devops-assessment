import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { createForm } from "../features/forms/formsSlice";
import { Button, message } from "antd";
import "../styles/formBuilder.scss";

const availableFields = [
  { type: "text", label: "Text Field" },
  { type: "email", label: "Email Field" },
  { type: "number", label: "Number Field" },
  { type: "date", label: "Date Field" },
  { type: "radio", label: "Radio Field" },
];

const DraggableField = ({ field }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: field.type,
    data: field,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    zIndex: transform ? 9999 : "auto",
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="field-item">
      {field.label}
    </div>
  );
};

const DropZone = ({ children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: "dropzone" });

  return (
    <div ref={setNodeRef} className={`drop-zone ${isOver ? "active" : ""}`}>
      {children.length > 0 ? (
        children
      ) : (
        <p style={{ textAlign: "center", color: "#999" }}>
          Drag fields here to build your form
        </p>
      )}
    </div>
  );
};

const FormBuilderPage = () => {
  const [fields, setFields] = useState([]);
  const dispatch = useDispatch();

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over && over.id === "dropzone") {
      const newField = { ...active.data.current, id: uuidv4() };
      setFields((prev) => [...prev, newField]);
    }
  };

  const handleSaveForm = async () => {
    if (fields.length === 0) {
      message.warning("Please add at least one field before saving!");
      return;
    }

    const formPayload = {
      title: "My Custom Form",
      description: "Form built using React Form Builder",
      fields: JSON.stringify(fields),
    };

    const result = await dispatch(createForm(formPayload));
    if (createForm.fulfilled.match(result)) {
      message.success("Form saved successfully!");
      setFields([]); // clear form after save
    } else {
      message.error("Error saving form");
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="form-builder-container">
        <div className="field-list">
          <h3>Available Fields</h3>
          {availableFields.map((field) => (
            <DraggableField key={field.type} field={field} />
          ))}
        </div>

        <div className="builder-area">
          <DropZone>
            {fields.map((field) => (
              <div key={field.id} className="dropped-field">
                {field.label}
              </div>
            ))}
          </DropZone>

          <div className="save-button">
            <Button type="primary" onClick={handleSaveForm}>
              Save Form
            </Button>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default FormBuilderPage;
