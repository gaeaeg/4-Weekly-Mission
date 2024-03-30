import { useState, useEffect } from "react";
import { timeCalculate, getDateText } from "@/utils/timeCalc";

interface CardData {
  id: number;
  createdAt: string;
  title: string;
  url: string;
  imageSource?: string;
  timePassed: string;
  getDate: string;
}

export type Link = {
  createdAt: string;
  description: string;
  id: number;
  imageSource?: string;
  title: string;
  url: string;
};

type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

type Folder = {
  count: number;
  id: number;
  links: Link[];
  name: string;
  owner: Owner;
};

export type FolderResponse = {
  folder: Folder;
};

export function useCardsData() {
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        const data = (await response.json()) as FolderResponse;
        const processedData = data.folder.links.map((link: Link) => ({
          ...link,
          timePassed: timeCalculate(link.createdAt) as string,
          getDate: getDateText(new Date(link.createdAt)),
        }));
        setCardsData(processedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return cardsData;
}
