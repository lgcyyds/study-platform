import { computed } from 'vue';

export default function useFormatDate(t) {
  const date = new Date(t);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

  // 直接返回格式化后的时间字符串
  return `${year}年${month}月${day}日 ${hours}:${minutes}`;
}