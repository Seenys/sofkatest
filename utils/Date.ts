const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const getRevisionDate = (releaseDate: string) => {
  const date = new Date(releaseDate);
  date.setFullYear(date.getFullYear() + 1);
  return formatDate(date);
};

export { formatDate, getRevisionDate };
