const path = require('path');
const multer = require('multer')
const uuid4 = require('uuid4')
const uuid = () => {
  const token = uuid().split('-')
  return token[2] + token[1] + token[3] + token[4]
}

const multerOption = multer({
  storage: multer.diskStorage({
    destination : function(req,file, cb){
      cb(null, 'userUpload/');
    },
    filename : function(req, file, cb){
      var mimeType;
      switch (file.mimetype){
        case "image/jpeg":
          mimeType = 'jpg';
        break;

        case "image/png":
          mimeType = "png";
          break;
        
        case "image/gif":
          mimeType = "gif";
          break;
        
        case "image/bmp":
          mimeType = "bmp";
          break;

        default:
          mimeType = "null";
        break;
      }
      cb(null, uuid() + "." + mimeType);
    }
  }),
  fileFilter: function (req, file, callback){
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !=='.jpeg'){
      return callback(new Error('Only image are allowed'))
    }
    callback(null, true)
  },
  limits:{
    fileSize: 1024 * 1024 * 10
  }
})
module.exports = multerOption