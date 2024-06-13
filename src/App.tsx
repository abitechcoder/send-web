import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/Root";
import DashboardRoot from "./layouts/DashboardRoot";

//pages
import {
  LandingPage,
  Login,
  SignUp,
  Dashboard,
  ErrorPage,
  CorporateIdentity,
} from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="whoweare">
            <Route index element={<CorporateIdentity />} />
            <Route path="identity" element={<CorporateIdentity />} />
          </Route>
        </Route>
        <Route path="dashboard" element={<DashboardRoot />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
