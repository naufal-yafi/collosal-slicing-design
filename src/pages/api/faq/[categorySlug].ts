import Question from "@data/Question";
import type { NextApiRequest, NextApiResponse } from "next";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: {
    name: string;
    slug: string;
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const { categorySlug } = req.query;
    const faqData: FAQ[] = Question;
    const response = faqData.filter(
      (faq) => faq.category.slug === categorySlug,
    );

    req.method === "GET"
      ? res.status(200).json({
          code: 200,
          status: "OK",
          message: "Successfully Retrieving Data",
          page: {
            total_data: response.length,
          },
          data: response,
        })
      : res.status(404).json({
          code: 404,
          status: "Error Not Found",
          message: "Data could not be found",
          page: {
            total_data: 0,
          },
          data: null,
        });
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
