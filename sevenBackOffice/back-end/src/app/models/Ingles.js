import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Ingles = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },  
    nota_geral: {
        type: String,
    },
    reading: {
        type: String,
    },
    writing: {
        type: String,
    },
    listening: {
        type: String,
    },
    speaking: {
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

export default mongoose.model('ingles', Ingles);