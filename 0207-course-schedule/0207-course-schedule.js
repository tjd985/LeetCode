var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const visited = [];
  const current = [];

  for (let [after, before] of prerequisites) {
    graph.set(after, [...(graph.get(after) || []), before]);
  }

  const DFS = (node) => {
    const edges = graph.get(node);
    
    if (!edges) {
      return false;
    }
    
    else {
      for (const edge of edges) {
        if (visited.includes(edge)) {
          continue;
        }
        
        if (edge === node || current.includes(edge)) {
          return true;
        }
        
        current.push(edge);
        
        if (DFS(edge)) {
          return true;
        }
        
        current.pop(edge);
        visited.push(edge);
      }
    }
  };

  for (const [after, before] of graph) {
    if (DFS(after)) {
      return false;
    }
  }

  return true;
};