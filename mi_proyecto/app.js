
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clienteRouter = require('./routes/cliente'); 
var pedidoRoutes = require('./routes/pedido');

var app = express();


app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/clientes', clienteRouter); 
app.use('/clientes/:id', clienteRouter); 

app.use('/pedidos', pedidoRoutes);
app.use('/pedidos/:id', clienteRouter); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

module.exports = app;
