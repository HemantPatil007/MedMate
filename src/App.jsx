import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PolybaseProvider ,AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth"
import "./App.css";
import Admin from "./pages/Admin/Admin";
import Apply from "./pages/Apply/Apply";
import Forum from "./pages/Forum/Forum";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

const polybase = new Polybase();
const auth = new Auth()

function App() {
  return (
    <div className="App">
      <PolybaseProvider value={polybase}>
      <AuthProvider auth={auth} polybase={polybase}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Router>
      </AuthProvider>
      </PolybaseProvider>
    </div>
  );
}

export default App;