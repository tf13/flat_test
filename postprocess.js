// This can be a typescript file as well

// adapted from: https://github.com/githubocto/flat-demo-bitcoin-price

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, json, excel, zip, and image files
import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.9/mod.ts' 

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)
console.log(json)

// Step 2: pretty-print to a variable
// adapted from https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
var prettyprinted = JSON.stringify(json, null, 2); // spacing level = 2

// Step 3. Write a new JSON file with our filtered data
await writeJSON(filename, prettyprinted) // replace the json file with the pretty printed version
console.log("Wrote a post process file")

