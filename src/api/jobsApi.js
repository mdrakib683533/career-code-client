import { auth } from "../firebase/firebase.init";

export const jobsCreatedByPromise = async (email) => {
  const user = auth.currentUser;

  console.log("CURRENT USER:", user);

  const token = await user.getIdToken();

  console.log("JOB TOKEN EXISTS:", !!token);

  return fetch(
    `https://career-code-server-lac.vercel.app/jobs/applications?email=${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json());
};