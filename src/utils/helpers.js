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

export function formatRupiah(angka, prefix) {
  let number_string = angka.replace(/[^,\d]/g, '').toString();
  let split = number_string.split(',');
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
}
