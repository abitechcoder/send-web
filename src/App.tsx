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
import {
  GovernanceProjectsLoader,
} from "./pages/GenderEqualityDetails";
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
  GenderEquality,
  Climate,
  HealthDetails,
  SustainableGrowth,
  Health,
  Education,
  SustainableGrowthDetails,
  EducationDetails,
  GenderEqualityDetails,
} from "./pages";

//Admin Dashboard Pages
import {
  Blog,
  Dashboard,
  DonateAdmin,
  Event,
  GalleryAdmin,
  Home,
  Identity,
  Partner,
  Program,
  Recruitment,
  Report,
  Team,
  Testimonial,
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
          <Route path="program-areas">
            <Route index element={<SustainableGrowth />} />
            <Route path="sustainable-growth">
              <Route index element={<SustainableGrowth />} />
              <Route
                path=":projectId"
                element={<SustainableGrowthDetails />}
                loader={HealthProjectsLoader}
              />
            </Route>
            <Route path="health">
              <Route index element={<Health />} />
              <Route
                path=":projectId"
                element={<HealthDetails />}
                loader={HealthProjectsLoader}
              />
            </Route>
            <Route path="education">
              <Route index element={<Education />} />
              <Route
                path=":projectId"
                element={<EducationDetails />}
                loader={HealthProjectsLoader}
              />
            </Route>

            <Route path="gender-equality">
              <Route index element={<GenderEquality />} />
              <Route
                path=":projectId"
                element={<GenderEqualityDetails />}
                loader={GovernanceProjectsLoader}
              />
            </Route>
            <Route path="climate">
              <Route index element={<Climate />} />
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
          <Route path="report" element={<Report />} />
          <Route path="event" element={<Event />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="blog" element={<Blog />} />
          <Route path="donate" element={<DonateAdmin />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
