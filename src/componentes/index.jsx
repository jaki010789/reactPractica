import { useState }  from "react";

const CerrarSesion= () => {
    const [inicio, escogerInicioSesion]= useState(false);

    const DarInicio = () => {
escogerInicioSesion(true);
    };

    const DarFinalizar= () => {
        escogerInicioSesion(false);
    };

    return(
        <div class="btn">
            {inicio ? (
                <button className="btn" onClick={DarFinalizar}> Cerrar sesión</button>):(
              <button className="btn" onClick={DarInicio}>Iniciar sesión</button>
            )}

        </div>
    );
};

export default CerrarSesion;

