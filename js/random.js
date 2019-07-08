class Random {
    constructor(list) {
        this.list = list;
    }
    random() {
        let listLength = this.list.length;
        let num = Math.floor((Math.random() * listLength) + 0);
        return this.list[num];
    }
}