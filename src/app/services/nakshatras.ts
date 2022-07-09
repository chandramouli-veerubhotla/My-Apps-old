

export class Nakshatras {

    private _nakshatras = "Ashwini,Bharani,Krittika,Rohini,Mrigashira,Ardra,Punarvasu,Pushya,Ashlesha,Magha,Purva Phalguni,Uttara Phalguni,Hasta,Chitra,Swati,Vishakha,Anuradha,Jyeshtha,Moola,Purvashadha,Uttarashadha,Shravana,Dhanishtha,Shatabhisha,Purvabhadrapada,Uttara Bhadrapada,Revati"
    private _rasi = "Mesham,Rushabham,Mithunam,Karkatakam,Simham,Kanya,Thula,Vrushikam,Dhanasu,Makaram,Kumbham,Meenam"

    private _nakshatrasList: Array<string> = []
    private _rasiList: Array<string> = []

    constructor() {
        this._nakshatrasList = this._nakshatras.split(',')
        this._rasiList = this._rasi.split(',')
    }

    public nakshatras() {
        return this._nakshatrasList
    }

    public rasi() {
        return this._rasiList
    }

    public findRasi(nakshatraIdx: number, padam: number): string {
        let rasiIdx = Math.floor(((nakshatraIdx) * 4 + padam) / 9)
        return this._rasiList[rasiIdx]
    }
}