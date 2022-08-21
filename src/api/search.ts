import axios from 'axios'

export function search(keyword: string) {
  return axios.get(`/api/search?aws-s3-bucket-Id=default&keyword=${keyword}`)
}
