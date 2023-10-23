//capitilize and get first letter from string
export function capitalizeFirstLetter(data: string) {
  return data?.charAt(0)?.toUpperCase();
}

//amount formating
export const formateAmount = (amount: number) => {
  const formattedNumber = amount?.toLocaleString('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedNumber;
};
