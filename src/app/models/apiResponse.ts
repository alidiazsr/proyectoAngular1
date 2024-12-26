import { Episode } from "./episodes"

export interface ApiResponse {
    Title: string
    Season: string
    totalSeasons: string
    Episodes: Episode[]
    Response: string
}