export const NEW_LIST = "new_list"


export function listData(data) {
    return {
        type: NEW_LIST,
        payload: data
    }

}
