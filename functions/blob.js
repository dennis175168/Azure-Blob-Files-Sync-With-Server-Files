require('dotenv').config();
var azure = require('azure-storage');

var account = "itsupportfile";
var key = "";
console.log(process.env.account)
var blobService = azure.createBlobService(account, key);
var blob_name = 'itsupportfile';
var container_name = "dennisblob";

// var file_path = '/Users/lichenyu/Program/ProjectMod/AzureBlobReact/public/img/filename.jpg';




// console.log(UploadFile(file_path));

//upload LocalFile
function UploadFile(file_path, file_name , cb) {
    console.log(file_path);
    console.log(file_name);
    blobService.createBlockBlobFromLocalFile(container_name, file_name, file_path,
        function (error, result, response) {
            if (error) {
                console.log("Couldn't upload file %s", file_path);
                console.error(error);
            } else {
                cb(undefined, result);
                console.log("File %s uploaded successfully", file_path);
            }
        }
    );
}



//List 
function list(cb) {
    blobService.listBlobsSegmented(container_name, null, function (err, result) {
        if (err) {
            console.log("Couldn't list blobs for container %s", container_name);
            console.error(err);
        } else {
            cb(undefined, result);
            console.log("Successfully listed blobs for container %s", container_name);
            // console.log(result);
            // console.log(result.continuationToken);
        }
    });
}



module.exports = {
    list,
    UploadFile
}




