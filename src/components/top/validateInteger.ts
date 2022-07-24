function validateInteger(v: string) {
  return (
    /^([1-9][0-9]{0,17}|10{18})$/.test(v) ||
    "1 以上 1,000,000,000,000,000,000 以下の整数を入力してください"
  );
}

export default validateInteger;
