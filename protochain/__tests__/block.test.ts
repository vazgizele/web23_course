import Block from '../src/lib/block';

describe("Block tests", () => {
    
    test('Shold be valid', () => {
        const block = new Block(1,"abc")
        const valid = block.isValid();
        expect(valid).toBeTruthy()
    })

    test('Shold NOT be valid (hash)', () => {
        const block = new Block(1,"")
        const valid = block.isValid();
        expect(valid).toBeFalsy()
    })

    test('Shold NOT be valid (index)', () => {
        const block = new Block(-1,"abc")
        const valid = block.isValid();
        expect(valid).toBeFalsy()
    })
})