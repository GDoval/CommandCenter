
/*  Genera un div conteniendo una imagen y un anchor. Probar usando React.Fragment para evitar usar un div */

class CargarImagen extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }
    render() {
        return (
            <div className="col-sm-3">
                <img src={this.props.ruta} height="250" width="250" key="a"></img>
                <a href="#" key="b">{this.props.name}</a>
            </div>
        );
    }
}


/* Genera un div clase container. Se appendea sobre el div root del html, y adentro se generan los ROW de React  */

class GenerarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }
    render() {
        return (
            <div className="container" id="containerMain">
                {generoRows()}
            </div>
        );
    }
}

/* Genera un  div clase row para guardar 3 imagenes (creadas desde el component CargarImagen. El ID del Row se pasa por props para 
  poder diferenciar los distintos rows dentro del container*/

class GenerarRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }
    render() {
        return (
            <div className="row" id={this.props.ID}>
            </div>
        );
    }

}


/***************************************************************************************************** */


function retornoDB(callback) {
    $.ajax({
        type: 'POST',
        url: "../scripts/index.php/retornodb",
        success: callback,
        async: true
    })

        .fail(function () {
            console.log("I have failed you :( ");
        });
}

/* Pruebas */


function generoRows() {
    retornoDB(function (data) {
        let json = JSON.parse(data);
        if(json.length % 3 == 0)
        {
            restoEsCero(json);
        }else
        {
            restoNoEsCero(json);
        }
    });
}

function restoEsCero(json) {
    let arrayImagenes = [];
    let arrayRows = [];
    let arrayNombresRow = [];
    let cont = 0;
    let sumame = 1;
    let selectRow = '';
    let indiceRows = 0;
    const domContainer = document.querySelector('#containerMain');
    for (var key in json) {
        cont++;
        if (cont == 3) {
            cont = 0;
            let IDRow = 'id' + sumame;
            arrayRows.push(<GenerarRow ID={IDRow} />);
            arrayNombresRow.push(IDRow);
            sumame++;
        }

    }
    ReactDOM.render(arrayRows, domContainer);
    cont = 0;
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            arrayImagenes.push(<CargarImagen ruta={json[key].ruta} name={json[key].nombre} />);
            cont++;
        }
        if (cont == 3) {
            cont = 0;
            selectRow = document.querySelector('#' + arrayNombresRow[indiceRows]);
            ReactDOM.render(arrayImagenes, selectRow);
            indiceRows++;
            arrayImagenes = [];
        }
    }
}


function restoNoEsCero(json) {
    let arrayImagenes = [];
    let arrayRows = [];
    let arrayNombresRow = [];
    let cont = 0;
    let sumame = 1;
    let selectRow = '';
    let indiceRows = 0;
    const domContainer = document.querySelector('#containerMain');

    /* Parte 1 */
    for (var key in json) {
        cont++;
        if (cont == 3) {
            cont = 0;
            let IDRow = 'id' + sumame;
            arrayRows.push(<GenerarRow ID={IDRow} />);
            arrayNombresRow.push(IDRow);
            sumame++;
        }
    }
    let IDRow = 'id' + sumame;
    arrayRows.push(<GenerarRow ID={IDRow} />);
    arrayNombresRow.push(IDRow);


    ReactDOM.render(arrayRows, domContainer);
    cont = 0;

    /* Parte 2 */
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            arrayImagenes.push(<CargarImagen ruta={json[key].ruta} name={json[key].nombre} />);
            cont++;
        }
        if (cont == 3) {
            cont = 0;
            selectRow = document.querySelector('#' + arrayNombresRow[indiceRows]);
            ReactDOM.render(arrayImagenes, selectRow);
            indiceRows++;
            arrayImagenes = [];
        }
    }

    selectRow = document.querySelector('#' + arrayNombresRow[indiceRows]);
    ReactDOM.render(arrayImagenes, selectRow);
}






















$(document).ready(function () {
    $('#btnEnviar').click(renderizarOnReady);
});

function renderizarOnReady() {
    const domContainer = document.querySelector('#root');
    ReactDOM.render(<GenerarContainer />, domContainer);
}