const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    _id: { type: 'object', properties: [Object] },
    Image_name: { type: 'String' },
    Labels: { type: 'Array', items: [Object] },
    Count: { type: 'Number' }
}
);

// Model
const BlogPost = mongoose.model('imgs', BlogPostSchema);

module.exports =  BlogPost;