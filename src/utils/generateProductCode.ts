import SHA256 from 'crypto-js/sha256';

export const generateProductCode = (slug: string): string => {
  const hash = SHA256(slug).toString();
  const substring = hash.slice(0, 12);
  const digitsOnly = substring.replace(/\D/g, '');
  const paddedNumber = digitsOnly.padStart(6, '0').slice(0, 6);

  return paddedNumber;
};
