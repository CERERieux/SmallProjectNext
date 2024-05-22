const { db } = require('@vercel/postgres');
const { questionMock } = require("./mock.js")

async function seedQuestions(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`CREATE TABLE IF NOT EXISTS comments(
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            comment VARCHAR(500) NOT NULL,
            answer TEXT
        );`;
        console.log("Table created")
        const insertedQuestions = await Promise.all(
            questionMock.map(async (question) => {
                return client.sql`INSERT INTO comments (comment, answer)
                VALUES (${question.comment}, ${question.answer});`;
            }),
        );
        console.log(`Table seeded with ${insertedQuestions.length} questions`);
    } catch (error) {
        console.error('Error seeding tables:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedQuestions(client);
    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});