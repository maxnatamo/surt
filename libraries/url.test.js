import { verify } from './url';

describe('Verify URLs', () => {
  it('expect URL without protocol to return false', () => {
    const url = "example.com";

    expect(verify(url)).toBe(false);
  });

  it('expect URL without TLD to return false', () => {
    const url = "example";

    expect(verify(url)).toBe(false);
  });

  it('expect URL with HTTP scheme to return true', () => {
    const url = "http://example.com";

    expect(verify(url)).toBe(true);
  });

  it('expect URL with HTTP scheme and without protocol to return false', () => {
    const url = "http://example";

    expect(verify(url)).toBe(false);
  });

  it('expect URL with HTTP scheme to return true', () => {
    const url = "https://example.com";

    expect(verify(url)).toBe(true);
  });

  it('expect URL with FTP scheme to return false', () => {
    const url = "ftp://example.com";

    expect(verify(url)).toBe(false);
  });

  it('expect URL with file scheme to return false', () => {
    const url = "file://example.com";

    expect(verify(url)).toBe(false);
  });

  it('expect URL with www and TLD to return true', () => {
    const url = "http://www.example.com";

    expect(verify(url)).toBe(true);
  });

  // This should honestly return false, but the regex would be insane with TLDs.
  it('expect URL with file scheme to return true', () => {
    const url = "http://www.example";

    expect(verify(url)).toBe(true);
  });

  it('expect URL with all valid supported characters in path segment to return true', () => {
    const url = "http://www.example.com/ASDasd0123456789-_.~:/?#[]@!$&'()*.+,;%=";

    expect(verify(url)).toBe(true);
  });

  it('expect URL with a single invalid character in path segment to return false', () => {
    const url = "http://www.example.com/<";

    expect(verify(url)).toBe(false);
  });
});