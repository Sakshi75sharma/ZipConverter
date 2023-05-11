// function download(){
//     let zip = new JSZip()

//     let files = document.getElementById('files');

//     console.log(files.files);

//     Array.from(files.files).forEach((f,i) => {
//     zip.file(f.name, f)
//     })

//     zip.generateAsync({type: 'blob'})
//     .then((content) => {
//         var timestamp = new Date().getTime();
//         console.log(content)
//         saveAs(content, File.name + '.zip')
//         // var link = document.createElement('blob');
//         // link.href = URL.createObjectURL(content);
    
//         // // Set the download attribute with a dynamic value
//         // // based on the current timestamp
//         // var timestamp = new Date().getTime();
//         // link.download = 'archive_' + timestamp + '.zip';
    
//         // link.click();
        
//     })
// }

// Include the JSZip library
// You can download it from https://stuk.github.io/jszip/
// and include it in your HTML file using <script> tag.

// Create a new instance of JSZip
function download(){
var zip = new JSZip();


let files = document.getElementById('files');

    console.log(files.files);

    Array.from(files.files).forEach((f,i) => {
    zip.file(f.name, f)
    })
//Generate the zip archive asynchronously
zip.generateAsync({ type: 'blob' })
  .then(function (content) {
    // Create a temporary <a> element to download the zip archive
    var link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = 'archive.zip';
    
    
    // Set the download attribute for each file in the zip archive
    // based on the original file name
    zip.forEach(function (relativePath, file) {
        let fileName = file.name;
        var fileNameWithoutExtension = fileName.substr(0, fileName.lastIndexOf('.'));

// Get the file extension
var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);

console.log('File name without extension:', fileNameWithoutExtension);
console.log('File extension:', fileExtension);
      link.setAttribute('download', fileNameWithoutExtension + '.zip');
      link.click();
    });
  });
}
