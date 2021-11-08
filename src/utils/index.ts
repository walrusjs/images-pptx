import { copy, lstatSync } from 'fs-extra'

/**
 * 判断是否为目录
 * @param name
 */
export function isDir(path: string): boolean {
  let result

  try {
    result = lstatSync(path).isDirectory()
  } catch (err) {
    result = false
  }

  return result
}

/**
 * 拷贝目录
 * @param what
 * @param where
 */
export const ncpCopy = (what: string, where: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    if (isDir(what)) {
      copy(what, where, err => {
        if (err) {
          console.log(err)
          reject(err)
        }
        resolve()
      })
      return
    }
    reject('需要拷贝的目录不存在')
  })
}
