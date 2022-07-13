import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Fisica = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },  
    um_mile_test: {
        type: String,
    },
    cooper_test: {
        type: String,
    },
    gordura: {
        type: String,
    },
    data: {
        type: String,
    },
},
{
    timestamps: true,
});

SiteName.plugin(mongoosePaginate);

export default mongoose.model('fisica', Fisica);