export const getFormattedDate = (locale = 'en-US') => {
  const opts = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  const now = new Date();
  return new Intl.DateTimeFormat(locale, opts).format(now);
};