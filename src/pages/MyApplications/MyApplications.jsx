import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationsList from "./ApplicationsList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();

  console.log("Firebase user logged in:", !!user);

  return (
    <div>
      <ApplicationsStats></ApplicationsStats>
      <Suspense fallback={"loading for your application"}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(
            user.email,
            user.accessToken,
          )}
        ></ApplicationsList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
