export default interface IState {
  loading: boolean
  user: {
    logged: boolean
    token: string
  }
}
