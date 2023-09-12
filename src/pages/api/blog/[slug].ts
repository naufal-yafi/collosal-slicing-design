import CONTENT_BLOG from "@data/Content_Blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const { slug } = req.query;
    const response = CONTENT_BLOG.find((blog) => blog.slug === slug);

    if (req.method === "GET") {
      response
        ? res.status(200).json({
            code: 200,
            status: "OK",
            message: "Successfully Retrieving Data",
            page: {
              total_data: 1,
            },
            data: response,
          })
        : res.status(404).json({
            code: 404,
            status: "Not Found",
            message: "Data could not be found",
            page: {
              total_data: 0,
            },
            data: null,
          });
    } else {
      res.status(404).json({
        code: 404,
        status: "Not Found",
        message: "Data could not be found",
        page: {
          total_data: 0,
        },
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: (error as Error).message,
      page: {
        total_data: 0,
      },
      data: null,
    });
  }
}
