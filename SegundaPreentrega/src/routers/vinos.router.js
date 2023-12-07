import {Router} from 'express';
import { extractFile } from '../Middlewears/file';
import {Vino} from '../models/vinos.mongoose'


export const vinosRouter = Router()

vinosRouter.get ('/' , async(req, res) =>  {
const vinos = await Vino.find()
    res.json({vinos})
})

vinosRouter.get ('/:id' , async(req, res) =>  {
    const vino = await Vino.findById(rew, params.id)
    if(!vino){
        return res.status(404).json({ message: 'vino not found'})
    }
    res.json({ vino})
})

vinosRouter.post ('/', extractFile('foto') , async(req, res) =>  {
    try{
        if( req.file){
            req.body.fotoURL = req.file.path
        }
        const creado = await Vino.create(req.body)
        res.status(201).json(creado)
    } catch (error){
        res.status(400).json({ message: error.message}) 
    }

})

vinosRouter.put ('/:id' , async(req, res) =>  {
    if (req.body.fotoUrl) {
        return res.status(400).json({ message: 'fotoUrl no se puede modificar' })
      }
      const modificado = await Vino.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true })
      if (!modificado) {
        return res.status(404).json({ message: 'vino not found' })
      }
    res.json({ recibido: 'put por id'})
})

vinosRouter.delete ('/:id' , async(req, res) =>  {
    const borrado = await Gatito.findByIdAndDelete(req.params.id)
    if (!borrado) {
      return res.status(404).json({ message: 'gatito not found' })
    }
    res.json(borrado)
})

vinosRouter.post ('/:id/fotourl' , extractFile('foto') , async(req, res) =>  {
    if (!req.file) {
        return res.status(400).json({ message: 'debe cargar una foto válida' })
      }
      const modificado = await Vino.findByIdAndUpdate(
        req.params.id,
        { $set: { fotoUrl: req.file.path } },
        { new: true })
      if (!modificado) {
        return res.status(404).json({ message: 'vino not found' })
      }
      res.json(modificado)
    })

