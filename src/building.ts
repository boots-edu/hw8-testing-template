/***
 * DO NOT MODIFY THIS FILE. Instead, add your tests to test/building.test.ts
 *
 * The Building class is a base class with a method getSize() that returns the total
 * area of the building.
 * The Apartment, House, and Shack classes extend Building and implement getSize()
 * differently based on their properties.
 * The totalSize function takes an array of Building objects and returns the sum
 * of their sizes by calling getSize() on each building.
 * It needs to work for any subclass of Building, not just the ones shown here.
 */

export class Building {
    public area: number = 0;
    public getSize(): number {
        return this.area;
    }
}

export class Apartment implements Building {
    constructor(
        public floors: number,
        public area: number,
    ) {}

    getSize(): number {
        return this.floors * this.area;
    }
}

export class House extends Building {
    constructor(
        public rooms: number,
        public area: number,
    ) {
        super();
    }

    getSize(): number {
        return this.rooms * this.area;
    }
}

export class Shack extends Building {
    constructor(public area: number) {
        super();
    }

    getSize(): number {
        return this.area;
    }
}

export type BuildingFunction = (buildings: Building[]) => number;

export const totalSize: BuildingFunction[] = [
    function totalSize1(buildings: Building[]): number {
        let total = 0;
        for (const building of buildings) {
            total += building.getSize();
        }
        return total;
    },
];

export const totalSizeIncorrect = [
    function totalSize2(buildings: Building[]): number {
        let total = 0;
        for (const building of buildings) {
            total += building.area;
        }
        return total;
    },
    function totalSize3(buildings: Building[]): number {
        let total = 0;
        for (const building of buildings) {
            if (building instanceof Apartment) {
                total += building.floors * building.area;
            } else if (building instanceof House) {
                total += building.rooms * building.area;
            } else if (building instanceof Shack) {
                total += building.area;
            }
        }
        return total;
    },
];
