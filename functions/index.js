const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter
  const original = req.query.text;

  const writeResult = await admin.firestore().collection('messages').add({ original: original });

  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});
