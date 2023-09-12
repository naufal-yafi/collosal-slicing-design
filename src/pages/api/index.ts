import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(404).json({
    code: 404,
    status: "Not Found",
    page: {
      total_data: 0,
    },
    data: null,
  });
}
