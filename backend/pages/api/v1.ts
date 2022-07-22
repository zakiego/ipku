// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ip, country, city, region, longitude, latitude } = req.query;
  res.status(200).json({ ip, country, city, region, longitude, latitude });
}
