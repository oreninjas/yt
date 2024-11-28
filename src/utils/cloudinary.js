import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY,
});

const uploadeOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Final step for uploading
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
        // Done?
        console.log('File has been uploaded check bro!! GG'.response);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // Delete's temp file from server!
    }
};

export { uploadeOnCloudinary };
