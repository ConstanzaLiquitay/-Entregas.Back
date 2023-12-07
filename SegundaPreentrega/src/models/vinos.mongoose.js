import {Schema, model} from 'mongoose';
import { randomUUID } from 'crypto'
import mongoosePaginate from 'mongoose-paginate-v2';

const esquemaVino = new Schema({
    _id: { type: String, defaul: randomUUID(), require: true },
    nombre: { type: String, require: true },
    variedad: { type: String, require: true },
    descripcion: { type: String, require: true },
    fotoUrl: { type: String, default: 'static/images/vino.png' }

},{
    strict: 'throw',
    versionKey: false,
})

userSchema.plugin(mongoosePaginate)

export const Vino = model('Vino', esquemaVino) 