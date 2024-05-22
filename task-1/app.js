const readline = require("readline");

const BASE_URL = "https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const searchBook = (book) => {
    console.log(`Searching for ${book}...`);
    return book;
};

const displayBookInfo = (book) => {
    console.log(`Displaying ${book} info...`);
};

const main = async () => {
    rl.question("Enter a book title: ", async (userInput) => {
        const book = await searchBook(userInput.trim());
        if (book) {
            await displayBookInfo(book);
        } else {
            console.log("Book not found.");
        }

        main();
    });
};

main();
