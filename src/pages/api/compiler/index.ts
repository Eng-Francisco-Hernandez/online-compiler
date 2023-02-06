import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({ msg: "Ok" });
      } catch (error) {}
    case "POST":
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clientId: process.env.JDOODLE_CLIENT_ID,
            clientSecret: process.env.JDOODLE_CLIENT_SECRET,
            script: body.code,
            language: body.language,
            versionIndex: "0",
          }),
        };
        const response = await fetch(
          `${process.env.JDOODLE_BASE_URL}/execute`,
          requestOptions
        );
        const parsedResponse = await response.json();
        res.status(201).json(parsedResponse);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      return res.status(400).json({ msg: `Unsupported method ${method}` });
  }
};
