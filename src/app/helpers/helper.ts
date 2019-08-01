export class Helper {
    public static order<T>(object1: T, object2: T, key: string, desc: boolean = false) {

        let value1 = object1[key].toLowerCase();
        let value2 = object2[key].toLowerCase();

        let compare = 0;
        if (desc) {
            if (value1 < value2) {
                compare = 1;
            } else if (value1 > value2) {
                compare = -1;
            }
        } else {
            if (value1 > value2) {
                compare = 1;
            } else if (value1 < value2) {
                compare = -1;
            }
        }

        return compare;
    }
}
