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
      } catch (error) {}
    default:
      return res.status(400).json({ msg: `Unsupported method ${method}` });
  }
};
