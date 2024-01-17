import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

const Home = () => <div>Strona główna</div>;
const About = () => <div>O nas</div>;
const Services = () => <div>Usługi</div>;
const Contact = () => <div>Kontakt</div>;
const ContactUs = () => <div>Kontakt/My</div>;
const ContactPL = () => <div>Kontakt/PL</div>;
const ContactDE = () => <div>Kontakt/DE</div>;

const NotFound = ({ location }) => (
    <div>
      Nie znaleziono elementu: <code>{location.pathname}</code>
    </div>
);

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">O nas</Link></li>
              <li><Link to="/services">Usługi</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
              <li><Link to="/contact/us">Kontakt/My</Link></li>
              <li><Link to="/contact/pl">Kontakt/PL</Link></li>
              <li><Link to="/contact/de">Kontakt/DE</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/us" element={<ContactUs />} />
            <Route path="/contact/pl" element={<ContactPL />} />
            <Route path="/contact/de" element={<ContactDE />} />

            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
