/***
 * DO NOT MODIFY THIS FILE. Instead, add your tests to test/road.test.ts
 *
 * The Road class represents a road with a name and a used status.
 * The diagram functions generate a string representation of the used roads.
 * For example, if the roads are A (used), B (not used), C (used),
 * The output should be "A->C".
 * If no roads are used, the output should be "empty".
 */

export class Road {
    constructor(
        public name: string,
        public used: boolean,
    ) {}
}

export type RoadFunction = (roads: Road[]) => string;

export const diagram: RoadFunction[] = [
    function diagram1(roads: Road[]): string {
        const usedRoads = [];
        for (const road of roads) {
            if (road.used) {
                usedRoads.push(road.name);
            }
        }
        return usedRoads.length === 0 ? "empty" : usedRoads.join("->");
    },
    function diagram2(roads: Road[]): string {
        let trip = "";
        for (const road of roads) {
            if (road.used) {
                trip += `->${road.name}`;
            }
        }
        return trip === "" ? "empty" : trip.slice(2);
    },
];

export const diagramIncorrect = [
    function diagram3(roads: Road[]): string {
        const usedRoads = [];
        for (const road of roads) {
            if (road.used) {
                usedRoads.push(road.name);
            }
        }
        if (usedRoads.length === 0) {
            return "empty";
        } else if (usedRoads.length === 1) {
            return usedRoads[0];
        } else {
            let result = "";
            for (const usedRoad of usedRoads) {
                result += usedRoad + "->";
            }
            return result;
        }
    },
    function diagram4(roads: Road[]): string {
        return roads.length === 0 ? "empty" : roads.join("->");
    },
    function diagram5(roads: Road[]): string {
        if (roads.length === 0) {
            return "empty";
        } else if (roads[0].used) {
            if (roads[1].used) {
                return roads[0].name + "->" + roads[1].name;
            } else {
                return roads[0].name;
            }
        } else {
            return roads[1].name;
        }
    },
];
