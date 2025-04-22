const fs = require('fs');
const path = require('path');
const sass = require('sass');

// Define paths
const scssDir = path.join(__dirname, 'scss');
const mainScssFile = path.join(scssDir, 'main.scss');
const outputCssFile = path.join(__dirname, 'styles.css');

// Function to compile SCSS
function compileScss() {
  try {
    // Compile the SCSS
    const result = sass.compile(mainScssFile, {
      style: 'expanded', // or 'compressed' for minified output
    });

    // Write the compiled CSS to file
    fs.writeFileSync(outputCssFile, result.css);
    
    console.log(`Compiled SCSS to ${outputCssFile}`);
  } catch (error) {
    console.error('Error compiling SCSS:', error);
  }
}

// Initial compilation
compileScss();

// Watch SCSS files for changes if --watch flag is provided
if (process.argv.includes('--watch')) {
  console.log('Watching SCSS files for changes...');
  
  // Watch the scss directory
  fs.watch(scssDir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.scss')) {
      console.log(`${filename} changed. Recompiling...`);
      compileScss();
    }
  });
}