const express = require('express')
const router = express.Router()
const Articles = require('../models/articles')
const slugify = require('slugify')



async function listArticles(req,res) {
  let articles = await Articles.find().exec()
  if(!articles){
    res.status(404).json({message: "sorry, cant get articles now"})
  }
  res.send(articles)
}


async function createArticle(req,res){
  let article = req.body
  article.slug = slugify(article.title)
  article.excerpt = article.body.substring(0,50)+"...."

   try {
     let newArticle = await new Articles(article).save()
     res.status(201).json(newArticle)
   } catch (e) {
     res.status(400).json({message: e})
   }
 }


router.route('/')
      .get(listArticles)
      .post(createArticle)



// router.route('/:id')
//       .get(getArticle)
//       .delete(deleteArticle)
//       .put(updateArticle)


module.exports = router
