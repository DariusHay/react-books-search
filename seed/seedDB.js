const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactbooksearch"
);

const bookSeed = {
    title: "Destiny",
    author: "T. D. Jakes",
    description: "Life offers more when destiny is our focus! Our divine purpose maneuvers us past challenges, pains, and shortcuts and even what appears on the surface to be failure. On deeper reflection, we understand them as catalysts that shift us toward authentic self-identity, greater exposure, and bold life adventures. Whether you are just starting out, starting over, or wondering if there is greater success than what you've already accomplished, now is the time to reset your inner compass. Clear your path of distractions and disruptions. Correct places where you have veered off course. Get unstuck. Embrace your divine purpose and, with this revelatory guide from T.D. Jakes, dare to pursue the unseen order in your life circumstances that is your DESTINY. Remember feeling a pull, sensing a magnetic guide that was leading you to the right place or person? DESTINY, that inner compass, directs you to fulfillment of your highest purpose. When you reflect on your life, you may be amazed that your greatest moments resulted from circumstances that you did not control or initiate. You were destined! Stepping into your destiny means fulfilling the role you were created to play in life. You thrive and find the great elixir of contentment when you have the courage to pursue your true purpose.",
    image: "http://books.google.com/books/content?id=19-EAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "https://books.google.com/books/about/Destiny.html?hl=&id=19-EAQAACAAJ",
    date: new Date(Date.now())
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertOne(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
