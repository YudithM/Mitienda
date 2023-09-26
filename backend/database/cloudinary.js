const cloudinary = require('cloudinary').v2;
const {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY} = require  ('../conf')

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
})

async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'replit'
  })
}

module.exports= {
  uploadImage
}
