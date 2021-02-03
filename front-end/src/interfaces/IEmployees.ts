export default interface IEmployees {
  id?: number
  name: string
  surname: string
  birthday: string
  salary: number
  position?: string
  // eslint-disable-next-line camelcase
  office_id: number
  // eslint-disable-next-line camelcase
  created_at?: string
}
