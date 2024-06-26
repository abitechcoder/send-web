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
  EvolutionOfSend,
  SierraLeone,
  OrganizationStructure,
  ManagementTeam,
  BoardOfDirectors,
  GovtAndWomenEmpowerment,
  WorkWithUs,
  Gallery,
  Donate,
  ContactPage,
  ProjectReports,
  Newsletter,
  ManualAndProfiles,
  CaseStories,
  DirectorDetails,
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
            <Route path="corporate-identity" element={<CorporateIdentity />} />
            <Route path="evolution-of-send" element={<EvolutionOfSend />} />
            <Route path="sierra-leone" element={<SierraLeone />} />
            <Route path="org-structure" element={<OrganizationStructure />} />
            <Route path="mgt-team" element={<ManagementTeam />} />
            <Route path="board-of-directors">
              <Route index element={<BoardOfDirectors />} />
              <Route path=":directorId" element={<DirectorDetails />} />
            </Route>
          </Route>
          <Route path="strategic-direction">
            <Route index element={<GovtAndWomenEmpowerment />} />
          </Route>
          <Route path="work-with-us" element={<WorkWithUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="donate" element={<Donate />} />
          <Route path="publications">
            <Route index element={<ProjectReports />} />
            <Route path="project-reports" element={<ProjectReports />} />
            <Route path="newsletter" element={<Newsletter />} />
            <Route path="manual-and-profiles" element={<ManualAndProfiles />} />
            <Route path="case-stories" element={<CaseStories />} />
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
