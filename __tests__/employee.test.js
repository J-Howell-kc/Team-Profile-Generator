const Employee = require('../employee.js')
describe ('employee class', () => {
    it('Can Set name by constructor', ()=> {
        const newEmployee= new Employee('Bob')
        expect (newEmployee.name).toBe('Bob');
    })
    it('Can Set name by constructor', ()=> {
        const newEmployee= new Employee(null, 2)
        expect (newEmployee.id).toBe('2');
    })
    it('Can Set name by constructor', ()=> {
        const newEmployee= new Employee(null, null, 'Bob@bob.com')
        expect (newEmployee.email).toBe('Bob@bob.com');
    })
    it('Can Set name by constructor', ()=> {
        const newEmployee= new Employee('Bob')
        expect (newEmployee.getRole()).toBe('Employee');
    })

})