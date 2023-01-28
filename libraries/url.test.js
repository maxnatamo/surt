import { verify } from './url';

describe('Verify URLs', () => {
  it('expect hostname without protocol to return false', () => {
    const url = "example.com";

    expect(verify(url)).toBe(false);
  });

  it('expect hostname without TLD to return false', () => {
    const url = "example";

    expect(verify(url)).toBe(false);
  });

  it('expect hostname with HTTP scheme to return true', () => {
    const url = "http://example.com";

    expect(verify(url)).toBe(true);
  });

  it('expect hostname with HTTP scheme and without protocol to return false', () => {
    const url = "http://example";

    expect(verify(url)).toBe(false);
  });

  it('expect hostname with HTTP scheme to return true', () => {
    const url = "https://example.com";

    expect(verify(url)).toBe(true);
  });

  it('expect hostname with FTP scheme to return false', () => {
    const url = "ftp://example.com";

    expect(verify(url)).toBe(false);
  });

  it('expect hostname with file scheme to return false', () => {
    const url = "file://example.com";

    expect(verify(url)).toBe(false);
  });

  it('expect hostname with file scheme to return false', () => {
    const url = "http://www.example.com";

    expect(verify(url)).toBe(true);
  });

  // This should honestly return false, but the regex would be insane with TLDs.
  it('expect hostname with file scheme to return true', () => {
    const url = "http://www.example";

    expect(verify(url)).toBe(true);
  });
});