export namespace StorageManage {
  /** 获取对象 */
  export function Get<T = any>(key: string): T | null {
    let data = localStorage.getItem(key);
    return data == null ? null : JSON.parse(data);
  }

  /** 设置数据 */
  export function Set<T = any>(key: string, data: T) {
    let str = JSON.stringify(data);
    localStorage.setItem(key, str);
  }

  /** 设置数据 */
  export function Delete(key: string) {
    localStorage.removeItem(key);
  }

  export function Clear() {
    localStorage.clear();
  }
}
