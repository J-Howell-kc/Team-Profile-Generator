// set up html to display cards

// create manager card

const generateManager = function (manager) {
  return `
    <div class = "col-4 mt-4">
    <div class = "card h-100">
    <div class = "card-header">
    <h3>${manager.name}</h3>
    <h4>Manager</h4>
    </div>
   
    <div class = "card-body">
    <p class = "id"> ID: ${manager.id}</p>
    <p class = "email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class = "office number" >Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
};

// engineer card

const generateEngineer = function (engineer) {
    return `
      <div class = "col-4 mt-4">
      <div class = "card h-100">
      <div class = "card-header">
      <h3>${engineer.name}</h3>
      <h4>Engineer</h4>
      </div>
     
      <div class = "card-body">
      <p class = "id"> ID: ${enf=gineer.id}</p>
      <p class = "email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class = "gitHub" >Github: ${engineer.gitHub}</p>
      </div>
      </div>
      </div>
      `;
  };
  

// intern card

const generateIntern = function (intern) {
    return `
      <div class = "col-4 mt-4">
      <div class = "card h-100">
      <div class = "card-header">
      <h3>${intern.name}</h3>
      <h4>Intern</h4>
      </div>
     
      <div class = "card-body">
      <p class = "id"> ID: ${intern.id}</p>
      <p class = "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class = "school" >School: ${intern.school}</p>
      </div>
      </div>
      </div>
      `;
  };
  
// push html data to page

generateHTML = (data) => {

    // page array for cards
    pageArray = [];

    for (let i = 0; i<data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // call functions based on role 

        if (role === Manager) {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        if (role === Engineer) {
            const managerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        if (role === Intern) {
            const managerCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }
}

// join strings

const employeeCards = pageArray.join("")

//return to page

const generateTeam = generateTeamPage(employeeCards);
return generateTeam;

// generate html page

const generateTeamPage = function(employeeCards) {
    // html below here
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>

  </html>
    
    
    
    
    
    
    `;
}

// export
module.exports = generateHTML;