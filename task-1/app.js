const readline = require("readline");

const BASE_URL = "https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const searchBook = async (bookTitle) => {
    console.log(`Searching for ${bookTitle}...`);
    const response = await fetch(`${BASE_URL}/books/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: bookTitle }),
    });

    const data = response.json();
    return data;
};

const displayBookInfo = async (book) => {
    const description = book.description || "N/A";
    const title = book.title || "N/A";
    const authors = book.authors || "N/A";
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Authors: ${authors}`);
};

const main = async () => {
    rl.question("Enter a book title: ", async (userInput) => {
        const searchedBook = await searchBook(userInput.trim());
        if (searchedBook) {
            console.log(searchedBook);
            await displayBookInfo(searchedBook);
        } else {
            console.log("Book not found.");
        }

        main();
    });
};

main();
