const { callStepFunction } = require('./helpers/helpers')

module.exports.handle = async (event,contex,callback) => {
    console.log('--------------------------------');
    console.log('\n\n');
    console.log('Init reservation index.handle');

    const snsRecord = event.Records[0];
    const { Sns: { Message } } = snsRecord

    console.log('-----------------------Payload-----------------')
    console.log(Message)

    await callStepFunction({
        stateMachineArn: 'arn:aws:states:us-east-2:268769556228:stateMachine:ReservationsHotels',
        input: Message
      })
}