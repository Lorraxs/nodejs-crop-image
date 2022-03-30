const sharp = require('sharp');

var fs = require('fs');
var dir = 'C:\\LR_CORE\\txData\\CFXDefault_9E95EC.base\\clothes\\weapon\\'
fs.readdir(dir, (err, filesname)=>{
    filesname.forEach((filename)=>{
        console.log(filename)
        sharp(dir + filename).extract({width: 1117, height: 1117, left: 715, top: 115}).toFile('C:\\LR_CORE\\txData\\CFXDefault_9E95EC.base\\cropped_clothes\\weapon\\' + filename).then(function(new_file_info) {
            console.log("Image cropped and saved");
        }).catch(function(err) {
            console.log(err);
        });
    })
})