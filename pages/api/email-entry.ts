import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for email
  if (!body.email) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Email not found" });
  }

  // TODO: Store email in db
  console.log(body.email);

  // Redirects to success page
  res.redirect(302, "/email-entry-success");
}
