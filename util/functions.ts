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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const month = months[now.getMonth()];
  const dayOfMonth = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();
  const fullDate = `${month.slice(0, 3)} ${dayOfMonth}, ${year}`;
  const monthYear = `${month} ${year}`;

  const date = {
    fullDate,
    monthYear,
    year,
  };

  return date;
};
