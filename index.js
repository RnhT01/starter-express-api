const express = require('express')
const app = express()
app.all('/project', (req, res) => {
    console.log("Just got a request!")
    const value =  {email: [
      { type: 'required', message: "L'email est requis" },
      { type: 'pattern', message: 'Entrer un email valide' },
    ],}
    res.json(value)
})
app.listen(process.env.PORT || 3000)
