import editNote from "../../src/functions/editNote";

describe("Edit Note in \"Database\"", () => {
    test("Valid update", async () => {
        const {status, body} = await editNote(1, {"title":"Lab Study", "content": "Updated content"});
        expect(status).toBe(200);
        expect(body).toEqual({"id": 1, "title": "Lab Study", "content": "Updated content"});   
    });
    test("Non-existent ID", async () => {
        const {status, body} = await editNote(999, {"title": "Ghost Note", "content": "Wah"});
        expect(status).toBe(404);
        expect(body).toEqual({"error": "Note ID not found"});   
    });
})