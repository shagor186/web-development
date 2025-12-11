// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';

// export default function App() {
//     return (
//         <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//         </Routes>
//         </BrowserRouter>
//     );
// }



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import DashboardHome from "./components/DashboardHome";
// import DashboardSettings from "./components/DashboardSettings";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route index element={<DashboardHome />} />
//           <Route path="settings" element={<DashboardSettings />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }




import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <BrowserRouter>
           <nav className="flex gap-5 bg-gray-200 p-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}