import getAllNotes from "../../src/functions/getAllNotes";

describe("Retrieving all Notes in \"Database\"", () => {
    test("Retrieve Full List", async () => {
        const {status, body} = await getAllNotes();
        expect(status).toBe(200);
        expect(body).toEqual(expect.any(Array));   
    });
    test("Server Error", async () => {
        const {status, body} = await getAllNotes();
        expect(status).toBe(500);
        expect(body).toEqual({"error": "Unable to retrieve notes at this time"});   
    });
})