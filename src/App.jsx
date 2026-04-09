import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Testimonial from './pages/Testimonial';

// import Lab from './pages/Lab';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="testimonial" element={<Testimonial />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
