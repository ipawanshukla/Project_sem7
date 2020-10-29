// const AWS = require('aws-sdk')

// // const config = new AWS.Config({
// //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //     region: process.env.AWS_REGION
// // })
// anonLog = () => {
//     // Configure the credentials provider to use your identity pool
//     AWS.config.region = "us-east-1"; // Region
//     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//         IdentityPoolId: "us-east-1:16225f41-e3f4-4861-92d4-baf127091ee8",
//     });
//     // Make the call to obtain credentials
//     AWS.config.credentials.get(function () {
//         // Credentials will be available when this function is called.
//         var accessKeyId = AWS.config.credentials.accessKeyId;
//         var secretAccessKey = AWS.config.credentials.secretAccessKey;
//         var sessionToken = AWS.config.credentials.sessionToken;
//     });
// };
// anonLog();
// const client = new AWS.Rekognition();

// module.exports = async (SourceImage, TargetImage) => {
//     const params = {
//         "SourceImage": {
//             "Bytes": SourceImage
//         },
//         "TargetImage": {
//             "Bytes": TargetImage
//         },
//         "SimilarityThreshold": 70
//     };
//     client.compareFaces(params, function (err, response) {
//         if (err) {
//             console.log(err, err.stack); // an error occurred
//         } else {
//             response.FaceMatches.forEach(data => {
//                 let position = data.Face.BoundingBox
//                 let similarity = data.Similarity
//                 console.log(`The face at: ${position.Left}, ${position.Top} matches with ${similarity} % confidence`)
//             }) // for response.faceDetails
//         } // if
//     });
//     return true;
// }
