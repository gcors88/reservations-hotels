const AWS = require('aws-sdk')
const SES = new AWS.SES()

module.exports.handle = async (event, context, callback) => {
    console.log('------------------SEND EMAIL---------------------')
    console.log(event)

    if(!event){
        callback(null, null);  
    } else {}

    const params = {
        Destination: {
            ToAddresses: [event.to.toLowerCase()],
        },
        Message: {
            Body: {
            Html: {
                Charset: 'UTF-8',
                Data: `<html>
                            <body>
                            <h1> Olá você tem uma nova solicitação de reserva! <h1>
                            <h4> Segue os dados da reserva: </h4>
                            <p>Nome: ${event.name} </p>
                            <p>Quarto: ${event.bedroom} </p>
                            <p>Data: ${event.date} </p>
                            <table>
                                <tr>
                                    <td>
                                        <a href="https://google.com.br"><button>Confirmar</button></a>
                                    </td>
                                    <td>
                                        <a href="https://facebook.com.br"><button>Cancelar</button></a>
                                    </td>
                                </tr>
                            </table>
                            </body>
                        </html>
                `,
            },
            },
            Subject: {
            Data: `Solicitação de Reserva quarto ${event.bedroom}`,
            },
        },
        Source: `glauber17230@gmail.com`,
    };

    await SES.sendEmail(params).promise();
    callback(null, null);
}