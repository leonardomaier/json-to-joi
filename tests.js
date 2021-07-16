const fs = require('fs');
const { convertToJoi } = require('./converter');

const handleWriteFileError = (err) => {
  if (err) {
    console.log(err);
  }
}

fs.readdir('jsons', (err, files) => {

  if (err) {
    console.log(err);
  }

  files.forEach(file => {

    fs.readFile(`jsons/${file}`, 'utf-8', (err, content) => {

      if (err) {
        console.log(err);
      }

      const schemaContent = convertToJoi(content);

      const [first, second] = file.split('.');

      fs.writeFile(`output_schemas/${first + '-' + second}.js`, schemaContent, handleWriteFileError);

    });

  });

});