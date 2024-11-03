interface Edge {
  dest: number
  weight: number
}

export class Graph {
  vertices: number
  adjList: Edge[][] // 修改为 Edge 类型的数组
  constructor(vertices: number) {
    this.vertices = vertices
    this.adjList = Array.from({ length: vertices }).fill(null).map(() => [])
  }

  addEdge(src: number, dest: number, weight: number) {
    this.adjList[src].push({ dest, weight })
    this.adjList[dest].push({ dest: src, weight })
  }

  getAdjList(src: number) {
    return this.adjList[src]
  }
}
