#!/usr/bin/env node

/**
 * FuelPrices
 * Fuel Prices of 
 *
 * @author Obilginozi <www.oguzhanbilgin.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const getData = require('./utils/get-data');
const getCity = require('./utils/get-city');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	while (true) {
	const city = await getCity();
	const { strCity, strCityNo } = city;
	const tables = await getData(strCity, strCityNo);
	console.log(tables[0].toString());
	console.log(tables[1].toString());
	}
})();
