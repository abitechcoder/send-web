import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/Root";
import DashboardRoot from "./layouts/DashboardRoot";

// Loaders
import { loader as PartnersLoader } from "./pages/admin/Partner";
import { loader as ReportsLoader } from "./pages/admin/Report";
import { loader as TeamLoader } from "./pages/admin/Team";
import { loader as GalleryLoader } from "./pages/admin/Gallery";
import { loader as JobLoader } from "./pages/admin/Recruitment";
import { loader as IdentityLoader } from "./pages/admin/Identity";
import { loader as HomeDataLoader } from "./pages/admin/Home";
import { loader as TestimonialsLoader } from "./pages/admin/Testimonial";
import { loader as ProgramLoader } from "./pages/admin/Program";
//pages
import {
  LandingPage,
  Login,
  ErrorPage,
  CorporateIdentity,
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
  SearchPage,
  PaymentSuccess,
  PaymentFailure,
  ProgramDetails,
  GalleryDetails,
  ProjectDetails,
} from "./pages";

//Admin Dashboard Pages
import {
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
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { QueryClient } from "@tanstack/react-query";
import { ProgramAreaLoader } from "./loaders/ProgramAreaLoader";
import { CorporateIdentityLoader } from "./loaders/CorporateIdentityLoader";
import { landingPageLoader } from "./loaders/LandingPageLoader";
import { TeamMembersLoader } from "./loaders/TeamMembersLoader";
import { GalleryLoader as GalleriesLoader } from "./loaders/GalleryLoader";
import { RecruitmentLoader } from "./loaders/RecruitmentLoader";
import { ReportsLoader as ProjectReportsLoader } from "./loaders/ReportsLoader";
import { SearchPageLoader } from "./loaders/SearchPageLoader";
import {ProjectLoader} from "./loaders/ProjectLoader"

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: any) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function PageRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route element={<RootLayout />}>
          <Route
            index
            element={<LandingPage />}
            loader={landingPageLoader(queryClient)}
          />
          <Route path="login" element={<Login />} />
          <Route path="whoweare">
            <Route
              path="corporate-identity"
              element={<CorporateIdentity />}
              loader={CorporateIdentityLoader(queryClient)}
            />
            <Route path="org-structure" element={<OrganizationStructure />} />
            <Route
              path="mgt-team"
              element={<ManagementTeam />}
              loader={TeamMembersLoader(queryClient)}
            />
            <Route path="board-of-directors">
              <Route
                index
                element={<BoardOfDirectors />}
                loader={TeamMembersLoader(queryClient)}
              />
              <Route
                path=":directorId"
                element={<DirectorDetails />}
                loader={TeamMembersLoader(queryClient)}
              />
            </Route>
          </Route>
          <Route path="program-areas">
            <Route
              path=":programId"
              element={<ProgramDetails />}
              loader={({ params }) =>
                ProgramAreaLoader(queryClient, { params })()
              }
            />
            <Route path="projects">
              <Route
                path=":projectId"
                element={<ProjectDetails />}
                loader={({ params }) =>
                  ProjectLoader(queryClient, { params })()
                }
              />
            </Route>
          </Route>
          <Route
            path="work-with-us"
            loader={RecruitmentLoader(queryClient)}
            element={<WorkWithUs />}
          />
          <Route path="payment">
            <Route path="success" element={<PaymentSuccess />} />
            <Route path="failure" element={<PaymentFailure />} />
          </Route>
          <Route
            path="search"
            loader={SearchPageLoader(queryClient)}
            element={<SearchPage />}
          />
          <Route path="gallery">
            <Route
              index
              element={<Gallery />}
              loader={GalleriesLoader(queryClient)}
            />
            <Route
              path=":galleryId"
              element={<GalleryDetails />}
              loader={GalleriesLoader(queryClient)}
            />
          </Route>
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="donate">
            <Route index element={<Donate />} />
          </Route>
          <Route path="publications">
            <Route index element={<ProjectReports />} />
            <Route
              path="project-reports"
              element={<ProjectReports />}
              loader={ProjectReportsLoader(queryClient)}
            />
            <Route path="newsletter" element={<Newsletter />} />
            <Route path="manual-and-profiles" element={<ManualAndProfiles />} />
            <Route path="case-stories" element={<CaseStories />} />
          </Route>
        </Route>
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <DashboardRoot />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} loader={HomeDataLoader} />
          <Route path="partner" element={<Partner />} loader={PartnersLoader} />
          <Route
            path="identity"
            element={<Identity />}
            loader={IdentityLoader}
          />
          <Route
            path="gallery"
            element={<GalleryAdmin />}
            loader={GalleryLoader}
          />
          <Route path="team" element={<Team />} loader={TeamLoader} />
          <Route path="program" element={<Program />} loader={ProgramLoader} />
          <Route path="report" element={<Report />} loader={ReportsLoader} />
          {/* <Route path="event" element={<Event />} /> */}
          <Route
            path="recruitment"
            element={<Recruitment />}
            loader={JobLoader}
          />
          <Route
            path="testimonial"
            element={<Testimonial />}
            loader={TestimonialsLoader}
          />
          {/* <Route path="blog" element={<Blog />} />
          <Route path="donate" element={<DonateAdmin />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default PageRoutes;
