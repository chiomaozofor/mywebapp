// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import '../Styles/UserAuth.css'; // Ensure to create this CSS file for styling

// const UserAuth = () => {
//     const [userAuthDrop, setUserAuthDrop] = useState(false);

//     return (
//         <div className="UserAuth">
//             <FaUser
//                 className="user-icon"
//                 onMouseEnter={() => setUserAuthDrop(true)}
//             />

//             {userAuthDrop && (
//                 <div className="AuthDrop" onMouseLeave={() => setUserAuthDrop(false)}>
//                     <Link to="/Pages" className="auth-link">
//                         <h1>Pages</h1>
//                     </Link>
//                     <ul>
//                         <li>
//                             <Link to="/login" className="ActionBtn">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/signup">Create Account</Link>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserAuth;