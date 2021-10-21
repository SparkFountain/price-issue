import { UrlSegment } from '@angular/router';

// TODO: implement or remove
export function matcherFunction(url: UrlSegment[]) {
  if (url.length == 1) {
    const path = url[0].path;
    if (
      path.startsWith('today') ||
      path.startsWith('tomorrow') ||
      path.startsWith('expired')
    ) {
      return { consumed: url };
    }
  }
  return null;
}
