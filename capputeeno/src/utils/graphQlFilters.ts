import { FilterTypes } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export function getCategoryByType(type: FilterTypes) {
    if(type === FilterTypes.MUG) return "mugs"
    if(type === FilterTypes.SHIRT) return "t-shirts"
    return ""
}

export function getFieldByPriority(priority: PriorityTypes) {
    if(priority === PriorityTypes.NEWS) return { field: "created_at", order: "ASC"}
    if(priority === PriorityTypes.BIGGEST_PRICE) return { field: "price_in_cents", order: "ASC"}
    if(priority === PriorityTypes.MINOR_PRICE) return { field: "price_in_cents", order: "ASC"}
    return { field: "sales", order: "DSC"}
}

export function mountQuery(type: FilterTypes, priority: PriorityTypes) {
    if(type === FilterTypes.ALL && priority === PriorityTypes.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "ASC"){
        id
        name
        price_in_cents
        image_url
        }
    }`

    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `
    query {
        allProducts(filter: {sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: "{ category: "${categoryFilter}"}` : ""}{
          id
          name
          price_in_cents
          category
        }
      }
      
    `
}