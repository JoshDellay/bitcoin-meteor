Package.describe({
    summary: "Interactions with the Bitcoin network"
    version: "0.0.1"
});

Npm.depends({
    "bitcoin": "1.7.0"
});

Package.on_use(function (api) {
	api.add_files("bitcoin.js", "server");
	api.add_files("server/constants.js", "server");
    api.add_files("server/bitcoin_client.js", "server");
    api.export('Bitcoin');
});

