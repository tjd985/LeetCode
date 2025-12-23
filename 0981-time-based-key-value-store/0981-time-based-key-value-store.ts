class TimeMap {
  timeMap: Map<string, {value: string, timestamp: number}[]>;

  constructor() {
    this.timeMap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const list = this.timeMap.get(key) ?? [];
    list.push({ value, timestamp });

    this.timeMap.set(key, list);
  }

  get(key: string, timestamp: number): string {
    const list = this.timeMap.get(key);

    if (!list) {
      return '';
    }

    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].timestamp <= timestamp) {
        return list[i].value;
      }
    }

    return '';
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */