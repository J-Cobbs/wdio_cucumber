class Upload {
    get fileUpload () {return $('#file-upload');}
    get fileSubmit () {return $('#file-submit');}
    get fileUploaded () {return $('#uploaded-files');}
}

module.exports = new Upload();