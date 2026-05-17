import createNote from "../../src/functions/createNote";
import deleteNote from "../../src/functions/deleteNote";

describe("Delete Note in \"Database\"", () => {
    test("Valid deletion", async () => {
        const seedNote = await createNote({"title":"Lab Study", "content":"Review TDD"});
        const id = seedNote.body.id;

        const {status, body} = await deleteNote(id);
        expect(status).toBe(200);
        expect(body).toEqual(
            expect.objectContaining({
                "title": "Lab Study",
                "content": "Review TDD"
            })
        );              
    });

    test("Invalid delete", async () => {
        const {status, body} = await deleteNote(999);
        expect(status).toBe(404);
        expect(body).toEqual({"error": "Note ID not found"});   
    });
})
    