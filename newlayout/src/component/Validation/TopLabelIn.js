// import "./Validation.css";
// import React, { useState } from "react";
// import CustomDatepicker from "../form/CustomDatepicker";
// import Tagsinput from "../form/Tagsinput";

// export default function TopLabelsIn() {
//   return (
//     <>
//       <div className="form-frame frame">
//         <div className="card">
//           <form action="#">
//             <label>Top Labels In Put</label>

//             {/* 이메일 */}
//             <div className="form-groups has-top-label">
//               <label className="lable-font">Email</label>
//               <input
//                 name="email"
//                 className="form-control"
//                 value={"test@test.com"}
//               ></input>
//             </div>

//             {/* 패스워드 */}
//             <div className="form-groups has-top-label">
//               <label className="lable-font">password</label>
//               <input
//                 name="password"
//                 className="form-control"
//                 value={""}
//               ></input>
//             </div>

//             {/* 태그 */}
//             <div className="form-groups has-top-label">
//               <label className="lable-font">Tags</label>
//               <Tagsinput className="form-control" />
//             </div>

//             {/* 날짜 */}
//             <div className="form-groups has-top-label">
//               <label className="label-font">Date picker</label>
//               <div className="react-datePicker-wrapper">
//                 <CustomDatepicker />
//               </div>
//             </div>

//             <div className="form-groups has-top-label">
//               <label className="lable-font">select</label>
//               <select name="select" className="form-control">
//                 <option value={"Hello"}>안녕하세요</option>
//                 <option value={"Food"}>Food</option>
//                 <option value={"sky"}>Sky</option>
//                 <option value={"Sleep"}>Sleep</option>
//                 <option value={"bed"}>bed</option>
//                 <option value={"Dog"}>Dog</option>
//               </select>
//             </div>

//             <button type="submit" className="btn btn-color">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
