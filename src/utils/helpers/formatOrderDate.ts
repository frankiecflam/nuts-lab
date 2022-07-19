interface DateTimeFormatOptions {
  day: "2-digit";
  month: "short";
  year: "2-digit";
}

export default function formatOrderDate(date: Date) {
  const locale = navigator.language;

  const options: DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

  return formattedDate;
}
