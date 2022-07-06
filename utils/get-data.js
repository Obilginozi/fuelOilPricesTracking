const axios = require('axios');
const Table = require('cli-table3');
const FormData = require('form-data');
let start = "";
let end = "";
let tableStr = "";
let arrStr = [];
let index = 1;
module.exports = (strCity, strCityNo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const bodyFormData = new FormData();
            bodyFormData.append("__VIEWSTATE", "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");
            bodyFormData.append("cb_all_cb_province_VI", strCityNo);
            bodyFormData.append("cb_all$cb_province", strCity);
            bodyFormData.append("cb_all$cb_province$DDD$L", strCityNo);
            bodyFormData.append("__CALLBACKID", "cb_all");
            bodyFormData.append("__CALLBACKPARAM", "c0:{\"Action\":\"OnProvinceSelect\",\"Params\":{\"county_code\":null,\"province_code\":\"" + strCityNo + "\"}}");
            const results = await axios.post('https://www.****.com/pompatest/', bodyFormData, {
                headers: bodyFormData.getHeaders()
            });
            const withoutLeading0 = parseInt(strCityNo, 10);
            const results1 = await axios.get('https://api.****.com.tr/api/fuelprices/prices?ProvinceCode=' + withoutLeading0.toString() + '&IncludeAllProducts=true', {
                ProvinceCode: withoutLeading0.toString(),
                IncludeAllProducts: true
            });
            // console.log(results1.data);
            const table = new Table({
                head: [strCity+"/****", "K.Benzin Full-Save", "K.Benzin V-Power", "Motorin Full-save", "Motorin V-Power"]
            });
            let i = results.data.indexOf('<tr id="cb_all_grdPrices_DXDataRow1' + '" class="dxgvDataRow"');
            for (i; i < results.data.length; i + 610) {
                if (results.data.includes('<tr id="cb_all_grdPrices_DXDataRow' + index++ + '" class="dxgvDataRow"')) {
                    index--;
                    start = "";
                    end = "";
                    tableStr = "";
                    arrStr = [];
                    tableStr = "";
                    start = results.data.search('<tr id="cb_all_grdPrices_DXDataRow' + index + '" class="dxgvDataRow"');
                    end = results.data.indexOf('\\r\\n\\t\\t\\t</tr>', start);
                    tableStr = results.data.slice(start, end).split("\n");
                    if (tableStr.toString().length > 620) {
                        tableStr = tableStr.toString().replace(' style="border-right-width:0px;border-bottom-width:0px;"', '');
                        tableStr = tableStr.toString().replace(/ style="border-bottom-width:0px;"/g, '');
                    }
                    arrStr = tableStr.toString().split('</td><td class="ClassTxt1 dxgv" align="center">');
                    arrStr[0] = arrStr[0].replace('<tr id="cb_all_grdPrices_DXDataRow' + index + '" class="dxgvDataRow">\\r\\n\\t\\t\\t\\t<td class="ClassTxt1 dxgv" align="center">', '');
                    arrStr.splice(5, 4);

                    table.push([arrStr[0], arrStr[1], arrStr[2], arrStr[3], arrStr[4]]);
                } else {
                    i = results.data.length;
                }
                index++;
            }
            index = 1;

            const table1 = new Table({
                head: [strCity+"/****", "K.Benzin Ultra-Force", "Motorin Eco-Force", "Motorin Ultra-Force"]
            });
            for (i = 0; i < results1.data.length; i++) {
                table1.push([results1.data[i].districtName, results1.data[i].prices[0].amount, results1.data[i].prices[3].amount, results1.data[i].prices[2].amount]);
            }

            const tables = [table, table1];
            return resolve(tables);
        } catch (error) {
            reject(error);
        }
    })
}

