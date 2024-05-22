const readline = require("node:readline");

const BASE_URL = "https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const searchBook = async (bookTitle) => {
    try {
        const response = await fetch(`${BASE_URL}/books/search`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: bookTitle }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error searching book:", error.message);
        return null;
    }
};

const displayBookInfo = async (book) => {
    const description = book.description || "N/A";
    const title = book.title || "N/A";
    const authors = book.authors || "N/A";
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);

    const authorNames = await Promise.all(
        authors.map(async (authorId) => {
            return await getAuthorFullName(authorId);
        })
    );
    console.log(`Authors: ${authorNames.join(", ") || "No authors found"}`);
};

const getAuthorFullName = async (authorId) => {
    try {
        const response = await fetch(`${BASE_URL}/authors/${authorId}`);
        const data = await response.json();
        const firstName = data.firstName;
        let middleInitial = data.middleInitial;
        if (middleInitial === undefined) {
            middleInitial = "";
        } else {
            middleInitial = `${middleInitial}.`;
        }
        const lastName = data.lastName;
        const fullName = `${firstName} ${middleInitial}${lastName}`;
        return fullName;
    } catch (error) {
        console.error("Error fetching author name:", error.message);
        return null;
    }
};

const main = async () => {
    rl.question("Enter a book title ('Ctrl + C' to exit): ", async (userInput) => {
        const searchedBook = await searchBook(userInput.trim());
        if (searchedBook) {
            await displayBookInfo(searchedBook);
        } else {
            console.log("Book not found.");
        }

        main();
    });
};

main();
