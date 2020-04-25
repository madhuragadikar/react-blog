import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import withDB from './withDB';

const app = express();

app.use(express.static(path.join(__dirname,'/build')));

// Allows to access body of our POST request from inside our request
app.use(bodyParser.json());    //adds bodyParser plugin to our app

app.get('/api/articles/:name', async (req, res) => {
    const articleName = req.params.name;

    try{
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true}
        );  // connects to Mongoclient
        
        const db = client.db('react-blog-db');
    
        const articleInfo = await db.collection('articles')
        .findOne({ name: articleName });
      
        res.status(200).json(articleInfo);
        client.close();
    }
    catch (e) {
        res.status(500).json(e);
    }
   
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    const articleName = req.params.name;

    try{
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true}
        );  // connects to Mongoclient
        
        const db = client.db('react-blog-db');
    
        const articleInfo = await db.collection('articles')
        .findOne({ name: articleName });
    
        await db.collection('articles').updateOne(
            { name:articleName},
            { '$set': { upvotes: articleInfo.upvotes + 1}},
            );
    
        const updatedArticleInfo = await db.collection('articles')
        .findOne({ name: articleName });
    
        res.status(200).json(updatedArticleInfo);
        client.close();
    }
    catch (e) {
        res.status(500).json(e);
    }



    // articlesInfo[articleName].upvotes += 1;
    // res.status(200).send(`
    // Oh yes! ${articleName} now has 
    // ${articlesInfo[articleName].upvotes} upvotes`);
});
// app.get('/hello', (req, res) => res.send('Hello!'));
// app.get('/hello/:name', (req, res) => res.send(`Hello! ${req.params.name}`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));

app.post('/api/articles/:name/add-comment', async (req, res) => {
    
    const articleName = req.params.name;
    const newComment = req.body.comment;
    try{
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true}
        );  // connects to Mongoclient
        
        const db = client.db('react-blog-db');
    
        const articleInfo = await db.collection('articles')
        .findOne({ name: articleName });
    
        await db.collection('articles').updateOne(
            { name:articleName},
            { '$set': { comments: articleInfo.comments.concat(newComment)}},
            );
    
        const updatedArticleInfo = await db.collection('articles')
        .findOne({ name: articleName });
    
        res.status(200).json(updatedArticleInfo);
        client.close();
    }
    catch (e) {
        res.status(500).json(e);
    }
});

// Any requests that don't match above api urls will be sent to /build/index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(8000, () => {

    console.log('Server is listening on port 8000');
});