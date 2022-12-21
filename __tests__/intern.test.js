const Intern = require('../intern.js')
describe ('intern class', () => {
    it('Can Set name by constructor', ()=> {
        const testValue = "Bob University";
        const e = new Intern("Bob", 2, "Bob@bob.com", testValue);
        expect(e.getSchool()).toBe(testValue); }) })
        



//describe ('employee class', () => {
   // it('Can Set name by constructor', ()=> {
     //   const newIntern= new Intern('Bob')
     //   expect (newIntern.name).toBe('Bob');
    //})
   // it('Can Set name by constructor', ()=> {
    //    const newIntern= new Intern(null, 2)
    //    expect (newIntern.id).toBe('2');
   // })
   // it('Can Set name by constructor', ()=> {
     //   const newIntern= new Intern(null, null, 'Bob@bob.com')
     //   expect (newIntern.email).toBe('Bob@bob.com');
   // })
   // it('Can Set name by constructor', ()=> {
       // const newIntern= new Intern('Bob University')
      //  expect (newIntern.school()).toBe('Bob University');
   // })

