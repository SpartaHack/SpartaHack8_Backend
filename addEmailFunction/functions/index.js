const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();


exports.add_email = functions.https.onRequest(async (request, response) => {
	if(request.method === "POST"){
		const postData = request.body;
		if("email" in postData){
			db.collection('messages').add({email: postData.email})
			.then(ref => {
			   response.status(200).send("success"); 
			})
			.catch(err =>{
				response.status(500).send("failure");
			})
		}
		else response.status(500).send("failure");
		
	}  
	else response.status(500).send("failure");
});
