import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
