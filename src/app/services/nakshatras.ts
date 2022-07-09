

export class Nakshatras {

    private _nakshatras = "Ashwini,Bharani,Krittika,Rohini,Mrigashira,Ardra,Punarvasu,Pushya,Ashlesha,Magha,Purva Phalguni,Uttara Phalguni,Hasta,Chitra,Swati,Vishakha,Anuradha,Jyeshtha,Moola,Purvashadha,Uttarashadha,Shravana,Dhanishtha,Shatabhisha,Purvabhadrapada,Uttara Bhadrapada,Revati"
    private _nakshatras2 = "Ashwini,Bharani,Krittika,Rohini,Mrigashira,Ardra,Punarvasu,Pushya,Ashlesha,Magha,Purva Phalguni,Uttara Phalguni,Hasta,Chitra,Swati,Vishakha,Anuradha,Jyeshtha,Moola,Purvashadha,Uttarashadha,Abhijeet,Shravana,Dhanishtha,Shatabhisha,Purvabhadrapada,Uttara Bhadrapada,Revati"
    private _rasi = "Mesham,Rushabham,Mithunam,Karkatakam,Simham,Kanya,Thula,Vrushikam,Dhanasu,Makaram,Kumbham,Meenam"

    constructor() {
    }

    public normalNakshatras() {
        return this._nakshatras.split(',')
    }

    public normalNakshatrasWithAbhijeet() {
        return this._nakshatras2.split(',')
    }

    public rasi() {
        return this._rasi.split(',')
    }

    public findRasi(nakshatraIdx: number, padam: number): string {
        let rasiIdx = Math.floor(((nakshatraIdx) * 4 + padam) / 9)
        return this.rasi()[rasiIdx]
    }
}