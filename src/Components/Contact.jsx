// import React, { useState } from "react";

// const Contact = () => {
//   const [selectedOption, setSelectedOption] = useState("option1"); // Manage selected radio button state

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="container-fluid">
//       <h2>Contact Us</h2>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">
//           Email Id
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="formGroupExampleInput"
//           placeholder="johndoe@gmail.com"
//         />
//       </div>

//       <fieldset className="row mb-3">
//         <legend className="col-form-label col-sm-2 pt-0">
//           Select Your Query
//         </legend>
//         <div className="col-sm-10">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="gridRadios"
//               id="gridRadios1"
//               value="option1"
//               checked={selectedOption === "option1"}
//               onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="gridRadios1">
//               Technology
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="gridRadios"
//               id="gridRadios2"
//               value="option2"
//               checked={selectedOption === "option2"}
//               onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="gridRadios2">
//               Web Development
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="gridRadios"
//               id="gridRadios3"
//               value="option3"
//               checked={selectedOption === "option3"}
//               onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="gridRadios3">
//               Others
//             </label>
//           </div>
//         </div>
//       </fieldset>

//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Elaborate Your Concern
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Details About Your Concern"
//         />
//       </div>

//       <button type="button" class="btn btn-primary">
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from "react";

// const Contact = () => {
//   const [selectedOption, setSelectedOption] = useState("option1"); // Manage selected radio button state

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="container-fluid p-0">
//       {" "}
//       {/* Removed padding/margin for full screen */}
//       <div className="d-flex flex-column min-vh-100">
//         {" "}
//         {/* Ensures the content takes full height */}
//         <h2 className="mt-3 mb-4">Contact Us</h2>{" "}
//         {/* Added margin-top and margin-bottom */}
//         <div className="mb-3">
//           <label htmlFor="formGroupExampleInput" className="form-label">
//             Email Id
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="formGroupExampleInput"
//             placeholder="johndoe@gmail.com"
//           />
//         </div>
//         <fieldset className="row mb-3">
//           <legend className="col-form-label col-sm-2 pt-0">
//             Select Your Query
//           </legend>
//           <div className="col-sm-10">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gridRadios"
//                 id="gridRadios1"
//                 value="option1"
//                 checked={selectedOption === "option1"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="gridRadios1">
//                 Technology
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gridRadios"
//                 id="gridRadios2"
//                 value="option2"
//                 checked={selectedOption === "option2"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="gridRadios2">
//                 Web Development
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gridRadios"
//                 id="gridRadios3"
//                 value="option3"
//                 checked={selectedOption === "option3"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="gridRadios3">
//                 Others
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <div className="mb-3">
//           <label htmlFor="formGroupExampleInput2" className="form-label">
//             Elaborate Your Concern
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="formGroupExampleInput2"
//             placeholder="Details About Your Concern"
//           />
//         </div>
//         <button type="button" className="btn btn-primary">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("option1"); // Manage selected radio button state

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw", // Changed to '100vw' for full width
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Contact Us
      </h2>

      <div style={{ flex: 1, padding: "0 20px" }}>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput"
            className="form-label"
            
            style={{ display: "block", marginBottom: "8px",fontSize: "16px", fontWeight: "bold" }}
          >
            Email Id
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="johndoe@gmail.com"
            style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
          />
        </div>

        <fieldset className="row mb-3" style={{ marginBottom: "15px" }}>
          <legend
            className="col-form-label col-sm-2 pt-0"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            Select Your Query
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <label
                className="form-check-label"
                htmlFor="gridRadios1"
                style={{ fontSize: "14px" }}
              >
                Technology
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <label
                className="form-check-label"
                htmlFor="gridRadios2"
                style={{ fontSize: "14px" }}
              >
                Web Development
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <label
                className="form-check-label"
                htmlFor="gridRadios3"
                style={{ fontSize: "14px" }}
              >
                Others
              </label>
            </div>
          </div>
        </fieldset>

        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label"
            style={{ display: "block", marginBottom: "8px",fontSize: "16px", fontWeight: "bold" }}
          >
            Elaborate Your Concern
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Details About Your Concern"
            style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
            width: "100%", // Ensures the button spans the width of the container
            backgroundColor: "#007bff", // Bootstrap's primary button color
            border: "none",
            color: "#fff",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
