import Boton from '../components/Boton';

export default function Prueba() {
    fetch('/api/saludo').then(response => console.log(response));

    return (
        <div>
            <h1>Prueba js page</h1>

            <Boton />
        </div>
    );
}
