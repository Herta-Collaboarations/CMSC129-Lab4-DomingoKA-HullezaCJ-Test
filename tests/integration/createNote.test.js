import createNote from "../../src/functions/createNote";

describe("Create Note in \"Database\"", () => {
    test("Correct Request Body", () => {
        const result = createNote({"title":"Lab Study","content":"Review TDD"}); 
        expect(result).toBe(`201, {"id":1,"title":"Lab Study","content":"Review TDD"}`);   
    });
    test("Correct Request Body", () => {
        const result = createNote({"content":"Review TDD"}); 
        expect(result).toBe(`400, {"error":"Title is required"}`);   
    });
})