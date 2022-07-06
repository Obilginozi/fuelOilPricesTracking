const cityList = ["ADANA", "ADIYAMAN", "AFYON", "AGRI", "AMASYA", "ANKARA", "ANTALYA",
    "ARTVIN", "AYDIN", "BALIKESIR", "BILECIK", "BINGÖL", "BITLIS", "BOLU",
    "BURDUR", "BURSA", "CANAKKALE", "CANKIRI", "CORUM", "DENIZLI", "DIYARBAKIR",
    "EDIRNE", "ELAZIG", "ERZINCAN", "ERZURUM", "ESKISEHIR", "GAZIANTEP", "GIRESUN",
    "GUMUSHANE", "HAKKARI", "HATAY", "ISPARTA", "MERSIN", "ISTANBUL", "IZMIR",
    "KARS", "KASTAMONU", "KAYSERI", "KIRKLARELI", "KIRSEHIR", "KOCAELI", "KONYA",
    "KUTAHYA", "MALATYA", "MANISA", "KAHRAMANMARAS", "MARDIN", "MUGLA", "MUS",
    "NEVSEHIR", "NIGDE", "ORDU", "RIZE", "SAKARYA", "SAMSUN", "SIIRT", "SINOP", "SIVAS",
    "TEKIRDAG", "TOKAT", "TRABZON", "TUNCELI", "SANLIURFA", "USAK", "VAN", "YOZGAT",
    "ZONGULDAK", "AKSARAY", "BAYBURT", "KARAMAN", "KIRIKKALE", "BATMAN", "SIRNAK", "BARTIN",
    "ARDAHAN", "IGDIR", "YALOVA", "KARABUK", "KILIS", "OSMANIYE", "DUZCE"];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let strCityNo = "";
module.exports = () => {
    return new Promise( (resolve, reject) => {
        try {
            console.log('Sehir Plakanizi Giriniz (2 Hane): ');
            rl.on('line', (line) => {
                if (line.length < 2) {
                    strCityNo = "00" + line;
                }else {
                    strCityNo = "0" + line;
                }
                const strCity = cityList[line - 1];
                return resolve({strCity, strCityNo});
            });
        } catch (error) {
            reject(error);
        }
    })
}