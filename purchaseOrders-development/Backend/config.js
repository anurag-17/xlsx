const AWS = require("aws-sdk");

const config =AWS.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();
module.exports={config,dynamodb};