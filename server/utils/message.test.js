const expect  = require("chai").expect;

const {generateMessage} = require('./message')
console.log(" gen message: ", generateMessage)

describe("generateMessage", () => {
    it('should generate correct message object', () => {
        const from = 'Jen';
        const text = 'some message'; 
        const message = generateMessage(from, text);

        expect(message.createdAt).to.be.a('number');
        expect(message).include({from, text})
    })
})