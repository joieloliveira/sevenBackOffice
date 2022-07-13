import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cel: {
        type: String,
        required: true
    },
    academico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itens',
    },
    fisica: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itens',
    },
    ingles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itens',
    },
    tecnica: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itens',
    },
    treinos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itens',
    },
},
    {
        timestamps: true,
    });

User.plugin(mongoosePaginate);

export default mongoose.model('user', User);