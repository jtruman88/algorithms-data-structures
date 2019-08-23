/*
Given a directed graph (graph), s starting node (s) and an ending node (e),
write an algorithm to determine if there is a route bwteen s and e.

start candidiate with s
loop through edges of s
on recursive call, replace s with edge
*/

class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
  }
}

function isRoute(graph, s, e) {
  const result = {route: false};
  helper(graph, s, e, result, [s], s);
  return result.route;
}

function helper(graph, s, e, result, candidate, vert) {
  if (candidate.includes(s) && candidate.includes(e)) {
    result.route = true;
  } else {
    if (result.route) return;
    for (let i = 0; i < graph.adjList[vert].length; i += 1) {
      let currentVertex = graph.adjList[vert][i];
      candidate.push(currentVertex);
      helper(graph, s, e, result, candidate, currentVertex);
      candidate.pop();
    }
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');

/*

A------B
|\     |
| \    |
|  \   |
|   \  |
|    - C ----- E
|      |
|------D

*/

console.log(isRoute(graph, 'A', 'E'));
console.log(isRoute(graph, 'D', 'E'));
