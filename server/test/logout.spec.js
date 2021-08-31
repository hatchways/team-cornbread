const expect = require("chai").expect;
const  request = require('request');


// Automation test cases for Logout controller.
// in order to run the automatino tests, execute `npm run test` command.
// below code will triggers the logout REST Endpoint and checks the response from the server is 200.
describe("PING logout", () => {
  var url = 'http://localhost:3001/auth/logout';
  it("it should return 200", () => {   
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
  it("it should return Successfull message", () => {   
    request(url, function (error, response, body) {
      expect(body).to.equal('You have successfully logged out');
    });
  });
});


