import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DropZone = ({ children, onDrop }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "dropzone",
  });

  return (
    <div
      ref={setNodeRef}
      className={`drop-zone ${isOver ? "active" : ""}`}
      onDrop={onDrop}
    >
      {children && children.length > 0 ? (
        children
      ) : (
        <p style={{ textAlign: "center", color: "#999" }}>
          Drag fields here to build your form
        </p>
      )}
    </div>
  );
};

export default DropZone;


// import React from "react";
// import { useDroppable } from "@dnd-kit/core";

// const DropZone = ({ children }) => {
//   const { setNodeRef, isOver } = useDroppable({ id: "dropzone" });

//   return (
//     <div
//       ref={setNodeRef}
//       className={`dropzone ${isOver ? "active" : ""}`}
//       style={{
//         minHeight: "200px",
//         border: "2px dashed #999",
//         padding: "1rem",
//         backgroundColor: isOver ? "#e6f7ff" : "#fafafa",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default DropZone;
