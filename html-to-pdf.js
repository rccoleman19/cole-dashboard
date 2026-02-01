#!/usr/bin/env node

const htmlToPdf = require('html-pdf-node');
const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
  console.error('Usage: node html-to-pdf.js <input.html> <output.pdf>');
  process.exit(1);
}

const html = fs.readFileSync(inputFile, 'utf8');

const options = { 
  format: 'Letter',
  margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
};

const file = { content: html };

htmlToPdf.generatePdf(file, options).then(pdfBuffer => {
  fs.writeFileSync(outputFile, pdfBuffer);
  console.log(`✅ PDF created: ${outputFile}`);
}).catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
