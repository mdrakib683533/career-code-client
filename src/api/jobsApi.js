export const jobsCreatedByPromise = (email) => {
  return fetch(`https://career-code-server-lac.vercel.app/jobs/applications?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
