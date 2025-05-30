const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:27017/myproductdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use('/api', userRoutes);

app.use(express.static(path.join(__dirname)));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
