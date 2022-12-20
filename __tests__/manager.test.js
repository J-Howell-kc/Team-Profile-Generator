const Manager = require('../manager.js')
describe ('employee class', () => {
    it('Can Set name by constructor', ()=> {
        const newManager= new Manager('Bob')
        expect (newManager.name).toBe('Bob');
    })
    it('Can Set name by constructor', ()=> {
        const newManager= new Manager(null, 2)
        expect (newEmployee.id).toBe('2');
    })
    it('Can Set name by constructor', ()=> {
        const newManager= new Manager(null, null, 'Bob@bob.com')
        expect (newManager.email).toBe('Bob@bob.com');
    })
    it('Can Set name by constructor', ()=> {
        const newManager= new Manager('3')
        expect (newManager.officeNumber()).toBe('3');
    })

})