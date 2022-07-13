import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Treinos = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },  
    data: {
        type: String,
    },
    presenca: {
        type: String,
    },
    intensidade: {
        type: String,
    },
    foco: {
        type: String,
    },
    observacoes_gerais: {
        type: String,
    },
},
{
    timestamps: true,
});

SiteName.plugin(mongoosePaginate);

export default mongoose.model('treinos', Treinos);