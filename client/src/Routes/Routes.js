/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RoutesData from "./RoutesData";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import NavBar from "../Components/NavBar/Navbar";

const AppRoutes = () => {
  const localToken = localStorage.getItem("authToken");
  return (
    <Routes>
      {RoutesData.map(({ component: Component, ...i }, index) => {
        return (
          <Route
            key={index}
            {...i}
            element={
              <Suspense>
                {i.isPublic ? (
                  <PublicRoute authentication={localToken}>
                    <Component />
                  </PublicRoute>
                ) : (
                  <ProtectedRoute authentication={localToken}>
                    <NavBar>
                      <Component />
                    </NavBar>
                  </ProtectedRoute>
                )}
              </Suspense>
            }
          />
        );
      })}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
export default AppRoutes;
