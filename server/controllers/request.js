const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const Request = require("../models/Request")

// @route GET /request
// @desc Get list of requests for logged in users
// @access Private
exports.getUserRequests = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401);
      throw new Error("Not authorized");
    }

    await Request.find({}, function(err, requests) {

        var requestMap = {};
    
        requests.forEach(function(request) {
          requestMap[req.user.id] = request;
        });
    
        res.status(200).json({ requestMap });
      });

});



// @route POST / request/create
// @desc Create new request 
// @access Public
exports.createRequests = asyncHandler(async (req, res, next) => {

const {user_id, sitter_id,start, end, accepted, declined, paid} = req.body;

const request = await Request.create({
    user_id,
    sitter_id,
    start,
    end,
    accepted, 
    declined, 
    paid

  });
  
  if(request){
      
    res.status(201).json({
        success: {
          request: {
            user_id: user._id,
            sitter_id: sitter_id,
            start: start,
            end:end,
            accepted:accepted, 
            declined:declined, 
            paid:paid

          }
        }
      });
  }
  else{
    res.status(400);
    throw new Error("Invalid request data");
  }
});



// @route PUT /request/update
// @desc Update request
// @access Public
exports.updateRequest = asyncHandler(async (req, res, next) => {

    const {accepted, declined} = req.body

await Request.updateMany({ accepted: accepted },{ declined:declined}  );

});
