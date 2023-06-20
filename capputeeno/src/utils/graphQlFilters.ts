import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";

export function getCategoryByType(type: FilterType){
    if(type === FilterType.MUG) return "mugs"
    if(type === FilterType.SHIRT) return "t-shirts"
    return ""
}

export function getFieldByPriority(priority: PriorityTypes){
    if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
    if(priority === PriorityTypes.BIGGEST_PRICE)  return {field: "price_in_cents", order: "ASC"}
    if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
    return {field: "sales", order: "DSC"}
}

export const mountQuery = (type: FilterType, priority: PriorityTypes, page: number, limit: number) => {
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "DSC", page: ${page}, perPage: ${limit}) {
          id
          name
          price_in_cents
          image_url
        }
      }
    `
    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", page: ${page}, perPage: ${limit}, ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `
}

export const allProductsQuery = () => {
  return `query {
            allProducts(sortField: "sales"){
                id
                name
                price_in_cents
                image_url
            }
        }
    `
}