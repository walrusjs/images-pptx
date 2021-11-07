import { copy } from 'fs-extra'

/**
 * 拷贝目录
 * @param what
 * @param where
 */
export const ncpCopy = (what: string, where: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    copy(what, where, err => {
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve()
    })
  })
}
