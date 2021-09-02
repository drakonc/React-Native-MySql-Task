import app from './App/app';


app.listen(app.set('port'),() => {
        console.log(`Server on Port: ${app.get('port')}`);
    }
)