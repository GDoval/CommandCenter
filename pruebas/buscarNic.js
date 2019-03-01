
//Importamos ṕuppeteer
const puppeteer = require('puppeteer');
const DOMS = require('./dominios');

//Traemos los selectores de nic.ar

const SELECTOR_BUSQUEDA = '#edit-txtbuscar';
const SELECTOR_BOTON = '#btn-consultar-block-submit';
const SELECTOR_DNS = '#body > div.dialog-off-canvas-main-canvas > div.main-container.container.js-quickedit-main-content > div > section > div > div > div:nth-child(6) > table.tablaRespon3 > tbody > tr:nth-child(1) > td:nth-child(1)';

//Generamos las variables de busqueda

//Funcion principal

async function run(){
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox', 'headless:false']});
        let array_doms = [];
        let respuesta = "";
        array_doms = DOMS.Dominios;
        let bodyHandle;
        let resultado;
        const page = await browser.newPage();
        for(let i = 0 ; i < array_doms.length ; i++)
        {
                await page.goto('https://nic.ar');
                await page.click(SELECTOR_BUSQUEDA);
                await page.keyboard.type(array_doms[i]);
                await Promise.all([
                  page.click(SELECTOR_BOTON),
                  page.waitForNavigation(),
                ]);
                //Trae el selector de la tabla de resultados de la busqueda
                bodyHandle = await page.$('body > div.dialog-off-canvas-main-canvas > div.main-container.container.js-quickedit-main-content > div > section > div > div > div:nth-child(6) > table.tablaRespon3 > tbody > tr:nth-child(1) > td:nth-child(1)');
                        resultado = await page.evaluate(body => body.innerHTML, bodyHandle);
                        await bodyHandle.dispose();
                        respuesta = "El dominio " + array_doms[i] +" apunta a " +  resultado;
                        console.log(respuesta);
        }



};

run();



/*
        const browser = await puppeteer.launch({
                headless: false,
                args:['--no-sandbox']*/



//const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox', 'headless:false']});
