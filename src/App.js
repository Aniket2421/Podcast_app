import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";
import PrivateRoutes from "./Componet/PrivateRoutes";
import CreateAPodcast from "./Pages/CreateAPodcast";
import Podcastpage from "./Pages/Podcastpage";
import Podcastdetails from "./Pages/Podcastdetails";
import Episodes from "./Pages/Episodes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsbcribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsbcribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                  uid: user.uid,
                })
              );
            }
          },
          (error) => {
            console.error("Error fetching user data", error);
          }
        );
        return () => {
          unsbcribeSnapshot();
        };
      }
    });
    return () => {
      unsbcribeAuth();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
              path="/create-a-podcast"
              element={<CreateAPodcast />}
            ></Route>
            <Route path="/podcasts" element={<Podcastpage />}></Route>
            <Route path="/podcast/:id" element={<Podcastdetails />}></Route>
            <Route
              path="/podcast/:id/create-episode"
              element={<Episodes/>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
