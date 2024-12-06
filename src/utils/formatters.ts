export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}k`;
  }
  return views.toString();
};

export const formatDate = (date: string): string => {
  const now = new Date();
  const publishedDate = new Date(date);
  const diffInDays = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Aujourd'hui";
  if (diffInDays === 1) return "Hier";
  if (diffInDays < 7) return `il y a ${diffInDays} jours`;
  if (diffInDays < 30) return `il y a ${Math.floor(diffInDays / 7)} semaines`;
  if (diffInDays < 365) return `il y a ${Math.floor(diffInDays / 30)} mois`;
  return `il y a ${Math.floor(diffInDays / 365)} ans`;
};