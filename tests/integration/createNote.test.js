import createNote from "../../src/functions/createNote";

describe("Create Note in \"Database\"", () => {
    test("Correct request body", async () => {
        const {status, body} = await createNote({"title":"Lab Study", "content":"Review TDD"});
        expect(status).toBe(201);
        expect(body).toEqual({"id": 1, "title": "Lab Study", "content": "Review TDD"});   
    });
    test("Missing a field", async () => {
        const {status, body} = await createNote({"content":"Review TDD"});
        expect(status).toBe(400);
        expect(body).toEqual({"error": "Title is required"});   
    });
})