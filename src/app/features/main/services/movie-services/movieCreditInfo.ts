import { movieAPIClient } from "../movieAPIClient"
import { CREW_ROLE_DIRECTING, CREW_ROLE_WRITING, CrewRole, MovieCredit } from '../../types/movieCredit'

export const movieCreditInfo = async (movieId: number) => {
    try {
        const response = await movieAPIClient.get(`/movie/${movieId}/credits`)
        if (response.ok) {
            const data = response.data as any

            const credits: MovieCredit = {
                cast: (data.cast || []).map((member: any) => ({
                    id: member.id,
                    name: member.name,
                    character: member.character,
                    profilePath: member.profile_path || '',
                })),
                crew: (data.crew || [])
                    .filter((c: any) => c.department === CREW_ROLE_DIRECTING || c.department === CREW_ROLE_WRITING)
                    .map((c: any) => ({
                        name: c.name,
                        role: c.department as CrewRole
                    }))
            }

            return credits
        } else {
            throw new Error(`Error fetching movie credits: ${response.problem}`)
        }
    } catch (error) {
        console.error('Error fetching movie credits:', error)
        throw error
    }
}