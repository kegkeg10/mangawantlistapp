import express from 'express'
import { Manga } from '../models/mangaModel.js'

const router = express.Router()

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ) {
            return response.status(400).send({
                message: "Send all required Fields: title, author, publishYear"
            })
        }
        const newManga = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }

        const manga = await Manga.create(newManga)

        return response.status(201).send(manga)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

//route for Get All books
router.get('/', async (request, response) => {
    try {
        const mangas = await Manga.find({})

        return response.status(200).json({
            count: mangas.length,
            data: mangas
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
});

//route for  get 1 book
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params

        const manga = await Manga.findById(id)

        return response.status(200).json(manga)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})

//route for updating book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ) {
            return response.status(400).send({
                message: ' Send all required fields: title, author , publishYear'
            })
        }
        const {id} = request.params

        const result = await Manga.findByIdAndUpdate(id, request.body)
        
        if(!result) {
            return response.status(404).json({message: "Book Not Found"})
        }
        return response.status(200).send({message: 'Book Updated'})

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

//route delete manga
router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Manga.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'manga not found' });
      }
  
      return response.status(200).send({ message: 'manga deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router