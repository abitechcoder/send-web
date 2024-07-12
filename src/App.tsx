import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/Root";
import DashboardRoot from "./layouts/DashboardRoot";
import { loader as DirectorsLoader } from "./pages/BoardOfDirectors";
import { loader as DirectorLoader } from "./pages/DirectorDetails";
import { HealthProjectsLoader } from "./pages/HealthDetails";
import GovernanceDetails, {
  GovernanceProjectsLoader,
} from "./pages/GovernanceDetails";
import { loader as ClassificationLoader } from "./pages/WorkWithUs";
import LivelihoodDetails, {
  LivelihoodProjectsLoader,
} from "./pages/LivelihoodDetails";

//pages
import {
  LandingPage,
  Login,
  SignUp,
  ErrorPage,
  CorporateIdentity,
  EvolutionOfSend,
  SierraLeone,
  OrganizationStructure,
  ManagementTeam,
  BoardOfDirectors,
  WorkWithUs,
  Gallery,
  Donate,
  ContactPage,
  ProjectReports,
  Newsletter,
  ManualAndProfiles,
  CaseStories,
  DirectorDetails,
  DonationDetails,
  HealthAndEducation,
  Governance,
  Livelihood,
  HealthDetails,
} from "./pages";

//Admin Dashboard Pages
import {
  Dashboard,
  GalleryAdmin,
  Home,
  Identity,
  Partner,
  Program,
  Team,
} from "./pages/admin";

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
              <Route
                index
                element={<BoardOfDirectors />}
                loader={DirectorsLoader}
              />
              <Route
                path=":directorId"
                element={<DirectorDetails />}
                loader={DirectorLoader}
              />
            </Route>
          </Route>
          <Route path="strategic-direction">
            <Route index element={<HealthAndEducation />} />
            <Route path="edu-health">
              <Route index element={<HealthAndEducation />} />
              <Route
                path=":projectId"
                element={<HealthDetails />}
                loader={HealthProjectsLoader}
              />
            </Route>

            <Route path="governance">
              <Route index element={<Governance />} />
              <Route
                path=":projectId"
                element={<GovernanceDetails />}
                loader={GovernanceProjectsLoader}
              />
            </Route>
            <Route path="livelihood">
              <Route index element={<Livelihood />} />
              <Route
                path=":projectId"
                element={<LivelihoodDetails />}
                loader={LivelihoodProjectsLoader}
              />
            </Route>
          </Route>
          <Route
            path="work-with-us"
            loader={ClassificationLoader}
            element={<WorkWithUs />}
          />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="donate">
            <Route index element={<Donate />} />
            <Route path=":donationId" element={<DonationDetails />} />
          </Route>
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
          <Route path="home" element={<Home />} />
          <Route path="partner" element={<Partner />} />
          <Route path="identity" element={<Identity />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="team" element={<Team />} />
          <Route path="program" element={<Program />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
