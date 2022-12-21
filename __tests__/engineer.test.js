const Engineer = require('../engineer.js')
describe ('engineer class', () => {
    it('Can Set name by constructor', ()=> {
        const testValue = "BobsGitHub";
        const e = new Engineer("Bob", 2, "Bob@bob.com", testValue);
        expect(e.getgitHub()).toBe(testValue); 
        
        //const newEngineer= new Engineer('Bob')
       // expect (newEngineer.name).toBe('Bob');
   })})
  //  it('Can Set name by constructor', ()=> {
    //    const newEngineer= new Engineer(null, 2)
    //    expect (newEngineer.id).toBe('2');
   // })
   // it('Can Set name by constructor', ()=> {
       // const newEngineer= new Engineer(null, null, 'Bob@bob.com')
       // expect (newEngineer.email).toBe('Bob@bob.com');
 //   })
 //   it('Can Set name by constructor', ()=> {
   //     const newEngineer= new Engineer('BobsGitHub')
  //      expect (newEngineer.gitHub()).toBe('BobsGitHub');
  //  })

