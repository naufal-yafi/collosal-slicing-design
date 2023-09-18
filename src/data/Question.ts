import Category_FAQ from "./Category_FAQ";
import FAQ_DATA from "./FAQ_Data";

let countID = 1;

const Field = (id: number, data: any, category: object) => {
  return {
    id: id,
    question: data.question,
    answer: data.answer,
    category: category,
  };
};

const Question = [
  Field(countID++, FAQ_DATA.general[0], Category_FAQ[1]),
  Field(countID++, FAQ_DATA.general[1], Category_FAQ[1]),
  Field(countID++, FAQ_DATA.general[2], Category_FAQ[1]),
  Field(countID++, FAQ_DATA.general[3], Category_FAQ[1]),
  Field(countID++, FAQ_DATA.transaction[0], Category_FAQ[2]),
  Field(countID++, FAQ_DATA.transaction[1], Category_FAQ[2]),
  Field(countID++, FAQ_DATA.transaction[2], Category_FAQ[2]),
  Field(countID++, FAQ_DATA.transaction[3], Category_FAQ[2]),
  Field(countID++, FAQ_DATA.transaction[4], Category_FAQ[2]),
  Field(countID++, FAQ_DATA.transaction[5], Category_FAQ[2]),
  Field(countID++, FAQ_DATA.maintenance[0], Category_FAQ[3]),
  Field(countID++, FAQ_DATA.maintenance[1], Category_FAQ[3]),
  Field(countID++, FAQ_DATA.maintenance[2], Category_FAQ[3]),
  Field(countID++, FAQ_DATA.maintenance[3], Category_FAQ[3]),
  Field(countID++, FAQ_DATA.technology[0], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[1], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[2], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[3], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[4], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[5], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[6], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[7], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[8], Category_FAQ[4]),
  Field(countID++, FAQ_DATA.technology[0], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[1], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[2], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[3], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[4], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[5], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[6], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[7], Category_FAQ[5]),
  Field(countID++, FAQ_DATA.technology[8], Category_FAQ[5]),
];

export default Question;
