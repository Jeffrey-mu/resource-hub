import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export type groupByDatePara = {
  folderDate: string;
  folderName: string;
};
export type groupByDateReturn = {
  date: string;
  items: groupByDatePara[];
};
export function groupByDate(data: groupByDatePara[]): groupByDateReturn[] {
  // 创建一个 Map 用于存储分组后的数据
  const groupedData = new Map();

  // 遍历传入的数据数组
  data.forEach((item) => {
    // 获取日期字符串
    const dateStr = item.folderDate.split('T')[0];

    // 如果 Map 中已经存在该日期的数组，则直接将数据推入数组
    if (groupedData.has(dateStr)) {
      groupedData.get(dateStr).push(item);
    } else {
      // 如果 Map 中不存在该日期的数组，则创建一个新数组
      groupedData.set(dateStr, [item]);
    }
  });

  // 将 Map 转为数组形式返回
  return Array.from(groupedData, ([date, items]) => ({
    date,
    items,
  }));
}
type useFetchResponse<T> = { data: T };
export async function useFetch<T>(url: string) {
  return (await (
    await fetch(url, {
      cache: 'no-store',
    })
  ).json()) as useFetchResponse<T>;
}
