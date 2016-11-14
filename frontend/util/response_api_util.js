export const createResponses = (responses, success, error) => {
  const stringifiedResponses = JSON.stringify(responses);
  return $.ajax({
    method: "POST",
    url: "/api/responses",
    data: { responses: stringifiedResponses },
    success,
    error
  });
};
