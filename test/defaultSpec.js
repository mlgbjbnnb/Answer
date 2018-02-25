import convertIpv4AddrTo32BitInteger from '../answer';

describe("The convertIpv4AddrTo32BitInteger function", () => {
  let inputAddr;
  let inputAddrWithValidSpaces;
  let inputAddrWithInvalidSpaces;
  const EXPECTED_RESULT = 2896692481;

  beforeEach(() => {
    inputAddr = '172.168.5.1';
    inputAddrWithValidSpaces = ' 172. 168 .5.1';
    inputAddrWithInvalidSpaces = '172.1 68.5.1';
  });
  afterEach(() => {
    inputAddr = '';
    inputAddrWithValidSpaces = '';
    inputAddrWithInvalidSpaces = '';
  });

  it("should output converted integer", () => {
    let result = convertIpv4AddrTo32BitInteger(inputAddr);
    expect(result).toEqual(EXPECTED_RESULT);
  });

  it("should handle integer when spaces between a digit and a dot", () => {
    let result = convertIpv4AddrTo32BitInteger(inputAddrWithValidSpaces);
    expect(result).toEqual(EXPECTED_RESULT);
  });

  it("should report an error when spaces between two digits", () => {
    expect(() => {
      convertIpv4AddrTo32BitInteger(inputAddrWithInvalidSpaces)
    }).toThrow('Ip Format Error');
  });
});
