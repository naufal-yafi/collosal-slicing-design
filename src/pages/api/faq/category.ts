import Category_FAQ from "@data/Category_FAQ";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json({
    code: 200,
    status: "OK",
    message: "Successfully Retrieving Data",
    page: {
      total_data: 0,
    },
    data: [
      { id: 1, name: Category_FAQ[1].name, slug: Category_FAQ[1].slug },
      { id: 2, name: Category_FAQ[2].name, slug: Category_FAQ[2].slug },
      { id: 3, name: Category_FAQ[3].name, slug: Category_FAQ[3].slug },
      { id: 4, name: Category_FAQ[4].name, slug: Category_FAQ[4].slug },
      { id: 5, name: Category_FAQ[5].name, slug: Category_FAQ[5].slug },
    ],
  });
}
