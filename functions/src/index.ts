import { onRequest } from 'firebase-functions/v2/https';
// import * as logger from 'firebase-functions/logger';

// import express = require('express');
import puppeteer, { PDFOptions } from 'puppeteer';

exports.pdf = onRequest(
  { timeoutSeconds: 30 },
  // async (req: express.Request, resp: express.Response) => {
  async () => {
    const browser = await puppeteer.launch({
      headless: 'new',
      defaultViewport: {
        width: 1000,
        height: 50000,
      },
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:4200/preview/3XN0gt00Ktf2pm18jO6n', {
      waitUntil: 'networkidle2',
      timeout: 60000,
    });

    const pdfCongig: PDFOptions = {
      path: 'url.pdf', // Saves pdf to disk.
      format: 'A4',
      printBackground: true,
      margin: {
        // Word's default A4 margins
        top: '1cm',
        bottom: '1cm',
        left: '1cm',
        right: '1cm',
      },
    };

    await page.emulateMediaType('print');
    await page.pdf(pdfCongig);
    await browser.close();
    // writeFile('bamusterung.pdf', pdf, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log('Successfully Written to File.');
    //   resp.send('ok');
    // });
  }
);
