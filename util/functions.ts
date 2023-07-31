export const capitalizeString = (str: string | undefined) => {
  if (!str) return;
  const result = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return result;
};

export const truncateString = (string: string, num: number) => {
  if (string?.length > num) {
    return string.slice(0, num) + `...`;
  } else return string;
};

export const getCurrentDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = new Date();
  const month = months[now.getMonth()];
  const dayOfMonth = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();
  const formattedDate = `${month} ${dayOfMonth}, ${year}`;

  return formattedDate;
};
