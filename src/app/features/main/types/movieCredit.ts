export const CREW_ROLE_DIRECTING = 'Directing'
export const CREW_ROLE_WRITING = 'Writing'
export const CREW_ROLE_BOTH = `${CREW_ROLE_DIRECTING}, ${CREW_ROLE_WRITING}`

export type CrewRole = typeof CREW_ROLE_DIRECTING | typeof CREW_ROLE_WRITING

export type CrewMember = {
  name: string
  role: CrewRole
}

export type CastMember = {
  id: number
  name: string
  character: string
  profilePath: string
}

export type MovieCredit = {
  cast: CastMember[]
  crew: CrewMember[]
}