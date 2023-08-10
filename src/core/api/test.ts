import { Fetch } from "core/network"

export const getAnyData = () => {
    return Fetch.get("/api/data");
}
