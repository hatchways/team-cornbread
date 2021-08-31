const chai = require("chai");
const chaiHttp = require("chai-http");
const { before } = require("mocha");
const  request = require('request');

chai.should();
chai.use(chaiHttp);


// Automation test cases for /register,  /login,  /user, / endpoints.
// in order to run the automatino tests, execute `npm run test` command.
// before running this tests, delete the `test user` from mongo db and then continue to run test cases.


// below code will triggers the /register REST Endpoint and checks the response from the server is 200.
describe("Register Controller", () => {
  var url = 'http://localhost:3001/auth';

  // test case for checking response for existing user  `demo_user`.   
  // below code mimic for registering the demo_user  to the application and checks the response from the server.
  // we can expect the server should return 400 error response since we have demo_user already created in database.
  it('It should return status 400 existing for demo user', (done) => {
    const user = { username: 'demo_user', email: 'demo_user@mail.com', password: '123456' };
    chai
      .request(url)
      .post(`/register`)
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  // below code tries to register 'test user' with the application and it will expect 
  // the registration should be success and returns 201 response code. which means user successfully registered.

  it("it should return 201", (done) => {   
    const new_user = { username: 'test user', email: 'test_user@mail.com', password: '123456' };
    chai
      .request(url)
      .post(`/register`)
      .send(new_user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have
          .property("success");
        done();
      });
  });
});


// Below code is for automatino test suit for /Login endpoint or functionality.
// below code mimic the Login form and tries to login with previously registered test user.
// expectation will be login should be success and returns 200 success response code.
describe("Login Controller", () => {
  var url = 'http://localhost:3001/auth';
  var response;
  var cookies;
  var JWTToken = '';

  // below code will send the login request with emai and password and tries to store the response in above variables.
  // those variables 'response' and 'cookies' will be used in further test sripits.
  before((done) => {
    const user = { email: 'test_user@mail.com', password: '123456' };
    chai
      .request(url)
      .post(`/login`)
      .send(user)
      .end((err, res) => {
        response = res;
        cookies = res.header['set-cookie'];        
        done();
      });
  })

    // below code will inspect the response stored from above login request and expects it have 200 success status code.
    // which means the login was success and it has received the JWT Token.
  it("it should return 200 and JWT Token", () => {   
    response.should.have.status(200);   
    chai.expect(cookies[0].split('=')[0]).to.equal('token');
  });


  // By using the cookies received,  below code will test '/user' endpoint and expects success response statns code ie. 200 
  // and user object with details.
  it("it should return 200 login user details.", (done) => {  
    console.log(cookies[0].split(';')[0]);
    chai
    .request(url)
    .get(`/user`)
    .set('Cookie', cookies[0].split(';')[0])
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('success');
      done();
    });
  });


  // Logout endpoint test cases were available in 'logout.spec.js'.
});

