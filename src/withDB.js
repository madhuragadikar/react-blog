const withDB = async (operations) => {

    try{
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true}
        );  // connects to Mongoclient
        
        const db = client.db('react-blog-db');
        await operations(db);
        client.close();
    }
    catch (e) {
        console.log('Database error here');
    }
}

export default withDB;