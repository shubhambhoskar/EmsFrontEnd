import { Mappingobject } from "./mappingobject";

export class Criteriapage {
        content: Mappingobject [];
        pageable: {
            sort: {
                empty: boolean,
                sorted: boolean,
                unsorted: boolean
            };
            offset: number,
            pageNumber: number,
            pageSize: number,
            unpaged: boolean,
            paged: boolean
        };
        last: boolean;
        totalElements: number;
        totalPages: number;
        size: number;
        number: boolean;
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        };
        first: boolean;
        numberOfElements: number;
        empty: boolean;
}
