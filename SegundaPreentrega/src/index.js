import { Vinos } from './models/vinos.mongoose.js'

const opcionesDePaginacion = { limit: 3, page: 3 }
// @ts-ignore
const result = await Vinos.paginate(criterioDeBusqueda, opcionesDePaginacion)

console.log(result)

// limpio la base dsp de la prueba
await Vinos.deleteMany({})

// cierro la cnx para que el programa finalice y libere la terminal
await mongoose.connection.close()