import CONTENT_BLOG from "@data/Content_Blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    req.method === "GET"
      ? res.status(200).json({
          code: 200,
          status: "OK",
          message: "Successfully",
          page: {
            total_data: CONTENT_BLOG.length,
          },
          data: CONTENT_BLOG,
        })
      : res.status(404).json({
          code: 404,
          status: "Error",
          message: "",
          page: {
            total_data: 0,
          },
          data: null,
        });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      page: {
        total_data: 0,
      },
      data: null,
    });
  }
}
