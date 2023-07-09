const amqp = require("amqplib");

const msg = {number: 19}

connect();
async function connect(){
    try {
        const amqpServer = "amqp://localhost:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();

        // Make sure queue exists
        await channel.assertQueue("jobs");
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number} to queue`);
        // await channel.close();
        // await connection.close();
    }
    catch (ex){
        console.error(ex)
    }
}