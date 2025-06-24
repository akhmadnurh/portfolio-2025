import axios, { AxiosError } from "axios";
import { TPortfolio } from "~/interfaces/portfolio.interface";

export const AGetPortfolio = async (url: string) => {
  try {
    const portfolio = await axios.get<TPortfolio>(url);

    return portfolio.data;
  } catch (error) {
    throw new Error((error as AxiosError)?.message ?? "Something went wrong");
  }
};
