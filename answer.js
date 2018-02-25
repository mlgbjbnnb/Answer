/**
* Name: convertIpv4AddrTo32BitInteger
* Usage: Function to convert Ipv4 address to a 32 bit integer.
* Argument: ipStr String A null-terminated C string.
* Return: Integer A 32-bit integer.
* Author: jbao
*/

export default function convertIpv4AddrTo32BitInteger(ipStr) {
  let ipSectionList = ipStr.split('.');
  let bitCodeList = [];
  const BIT_PLACEHOLDER = Array(8).join(0);
  ipSectionList.map((ipSection) => {
    // Trim the space for head and tail
    let validIpSection = ipSection.trim();
    // The length of splitted array is larger than 1, which means space exists between two digits.
    if(validIpSection.split(' ').length > 1) {
      throw 'Ip Format Error';
    }
    // Transform code from decimal to binary and format to 8 bits.
    let rawBitCode = BIT_PLACEHOLDER + parseInt(validIpSection, 10).toString(2);
    let bitCode = rawBitCode.slice(-8);
    bitCodeList.push(bitCode);
  });
  // Combine to the complete bit code and recover to the decimal integer.ß
  let bitCodeStr = bitCodeList.join('');
  console.log('Result: ' + bitCodeStr);
  return parseInt(bitCodeStr, 2);
}
