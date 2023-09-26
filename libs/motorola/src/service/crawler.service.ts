import { Injectable } from '@nestjs/common';
import { JSDOMCrawler, log } from 'crawlee';
import { compose, prop, replace } from 'ramda';

@Injectable()
export class CrawlerService {
  private static readonly ATTR_KEY = '[data-varname=__STATE__]';
  private static readonly START = '\n    <script>';
  private static readonly END = '</script>\n  ';

  async run(url: string) {
    let result = {};
    const crawler = new JSDOMCrawler({
      runScripts: true,
      requestHandler: async ({ window }) => {
        result = compose(
          JSON.parse,
          replace(CrawlerService.END, ''),
          replace(CrawlerService.START, ''),
          (elem: Element) => elem.innerHTML || '',
          (doc: Document) => doc.querySelector(CrawlerService.ATTR_KEY),
          prop('document'),
        )(window);
      },
    });

    await crawler.run([url]);

    return result;
  }
}
