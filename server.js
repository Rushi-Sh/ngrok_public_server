import ngrok from 'ngrok';

(async function () {
    const url = await ngrok.connect({
        addr: 8000,
        proto: 'http',
        region: 'in',
        authtoken: process.env.NGROK_API_KEY
    });
    console.log(`Ngrok tunnel started at: ${url}`);
})();
