export function checkOperator(number) {
  const nomor = String(number);
  number = nomor.replace(/^(62|0|\+62)/, '').substr(0, 3);

  const operator = {
    811: 'TELKOMSEL',
    812: 'TELKOMSEL',
    813: 'TELKOMSEL',
    821: 'TELKOMSEL',
    822: 'TELKOMSEL',
    823: 'TELKOMSEL',
    851: 'TELKOMSEL',
    852: 'TELKOMSEL',
    853: 'TELKOMSEL',
    814: 'INDOSAT',
    815: 'INDOSAT',
    816: 'INDOSAT',
    855: 'INDOSAT',
    856: 'INDOSAT',
    857: 'INDOSAT',
    858: 'INDOSAT',
    817: 'XL',
    818: 'XL',
    819: 'XL',
    831: 'AXIS',
    832: 'AXIS',
    833: 'AXIS',
    838: 'AXIS',
    859: 'XL',
    877: 'XL',
    878: 'XL',
    881: 'SMARTFREN',
    882: 'SMARTFREN',
    883: 'SMARTFREN',
    884: 'SMARTFREN',
    885: 'SMARTFREN',
    886: 'SMARTFREN',
    887: 'SMARTFREN',
    888: 'SMARTFREN',
    889: 'SMARTFREN',
    894: 'THREE',
    895: 'THREE',
    896: 'THREE',
    897: 'THREE',
    898: 'THREE',
    899: 'THREE',
  };

  if (number.length > 3 && number.length < 3) {
    return 'Operator';
  }
  if (operator[number] === undefined) {
    return 'Operator';
  }
  return operator[number];
}
