(()=>{var e={};e.id=475,e.ids=[475],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{},98321:(e,t,i)=>{"use strict";i.r(t),i.d(t,{patchFetch:()=>y,routeModule:()=>g,serverHooks:()=>b,workAsyncStorage:()=>h,workUnitAsyncStorage:()=>f});var a={};i.r(a),i.d(a,{default:()=>l});var o={};i.r(o),i.d(o,{GET:()=>d});var n=i(96559),r=i(48088),s=i(37719),c=i(32190);let p=[{id:"quantum-computing-basics",title:"Introduction to Quantum Computing: From Qubits to Quantum Algorithms",excerpt:"A comprehensive guide to understanding the fundamentals of quantum computing, including qubits, superposition, and quantum algorithms.",content:`
# Introduction to Quantum Computing

Quantum computing represents a paradigm shift in computational power, leveraging the principles of quantum mechanics to process information in ways that classical computers cannot.

## What are Qubits?

Unlike classical bits that can only be in states 0 or 1, qubits can exist in a superposition of both states simultaneously. This property allows quantum computers to process exponentially more information than classical computers.

## Key Quantum Principles

1. **Superposition**: Qubits can be in multiple states at once
2. **Entanglement**: Qubits can be correlated in ways that classical bits cannot
3. **Interference**: Quantum states can interfere constructively or destructively

## Quantum Algorithms

Some of the most famous quantum algorithms include:
- Shor's algorithm for factoring large numbers
- Grover's algorithm for unstructured search
- Quantum Fourier Transform

## Example: Basic Quantum Circuit

Here's a simple example of a quantum circuit using Qiskit:

\`\`\`python
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram

# Create a quantum circuit with 2 qubits
qc = QuantumCircuit(2, 2)

# Apply Hadamard gate to first qubit (creates superposition)
qc.h(0)

# Apply CNOT gate (entangles the qubits)
qc.cx(0, 1)

# Measure both qubits
qc.measure([0, 1], [0, 1])

# Execute the circuit
backend = Aer.get_backend('qasm_simulator')
job = execute(qc, backend, shots=1000)
result = job.result()

# Get the results
counts = result.get_counts(qc)
print("Results:", counts)
\`\`\`

## Current State and Future

While quantum computers are still in their infancy, companies like IBM, Google, and startups are making significant progress in building practical quantum systems.
    `,date:"2024-01-15",author:"Mada Kasasi",tags:["Quantum Computing","Algorithms","Physics"],category:"Technology",readTime:8,featured:!0,imageUrl:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"},{id:"cpp-performance-optimization",title:"Advanced C++ Performance Optimization Techniques",excerpt:"Deep dive into C++ optimization strategies, from memory management to compiler optimizations and modern C++ features.",content:`
# Advanced C++ Performance Optimization

C++ is renowned for its performance capabilities, but achieving optimal performance requires understanding both the language and the underlying hardware.

## Memory Management

### Smart Pointers
Modern C++ provides smart pointers that automatically manage memory:
- \`std::unique_ptr\` for exclusive ownership
- \`std::shared_ptr\` for shared ownership
- \`std::weak_ptr\` for non-owning references

### Memory Layout
Understanding cache-friendly data structures is crucial:
- Structure of Arrays (SoA) vs Array of Structures (AoS)
- Cache line alignment
- Memory pooling

## Compiler Optimizations

### Inlining
The compiler can inline functions to reduce function call overhead:

\`\`\`cpp
inline int add(int a, int b) {
    return a + b;
}
\`\`\`

### Loop Optimizations
- Loop unrolling
- Vectorization
- Loop fusion and fission

## Modern C++ Features

### Move Semantics
Move semantics allow efficient transfer of resources:

\`\`\`cpp
std::vector<int> createVector() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    return v; // Move constructor called
}
\`\`\`

### Constexpr
Compile-time evaluation for better performance:

\`\`\`cpp
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}
\`\`\`

## Example: Performance-Optimized Class

Here's an example of a performance-optimized class:

\`\`\`cpp
#include <memory>
#include <vector>

class OptimizedContainer {
private:
    std::unique_ptr<int[]> data_;
    size_t size_;
    
public:
    // Use move constructor for efficient transfers
    OptimizedContainer(OptimizedContainer&& other) noexcept
        : data_(std::move(other.data_))
        , size_(other.size_) {
        other.size_ = 0;
    }
    
    // Reserve space to avoid reallocations
    void reserve(size_t capacity) {
        if (capacity > size_) {
            auto new_data = std::make_unique<int[]>(capacity);
            std::copy(data_.get(), data_.get() + size_, new_data.get());
            data_ = std::move(new_data);
        }
    }
};
\`\`\`

## Profiling and Benchmarking

Tools like Valgrind, perf, and Google Benchmark help identify performance bottlenecks and measure improvements.
    `,date:"2024-01-10",author:"Mada Kasasi",tags:["C++","Performance","Optimization"],category:"Programming",readTime:12,featured:!0,imageUrl:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"},{id:"ai-robotics-integration",title:"Integrating AI with Robotics: A Practical Approach",excerpt:"Exploring the intersection of artificial intelligence and robotics, from computer vision to autonomous navigation.",content:`
# Integrating AI with Robotics

The integration of AI and robotics is revolutionizing automation, enabling robots to perform complex tasks in unstructured environments.

## Computer Vision in Robotics

### Object Detection
Modern object detection algorithms like YOLO and Faster R-CNN enable robots to identify and locate objects in their environment.

### Pose Estimation
Understanding the 3D pose of objects is crucial for manipulation tasks:
- 6-DOF pose estimation
- Multi-view geometry
- Depth sensing

## Path Planning and Navigation

### SLAM (Simultaneous Localization and Mapping)
SLAM algorithms allow robots to build maps of unknown environments while tracking their position:
- Visual SLAM
- LiDAR SLAM
- Hybrid approaches

### Motion Planning
Algorithms for planning collision-free paths:
- RRT (Rapidly-exploring Random Trees)
- PRM (Probabilistic Roadmaps)
- Optimization-based methods

## Machine Learning for Control

### Reinforcement Learning
RL enables robots to learn complex behaviors through trial and error:
- Policy gradient methods
- Q-learning
- Actor-critic methods

### Imitation Learning
Learning from human demonstrations:
- Behavioral cloning
- Inverse reinforcement learning
- Generative adversarial imitation learning

## Example: Basic Robot Control

Here's a simple example of robot control using Python:

\`\`\`python
import numpy as np
from scipy.spatial.transform import Rotation

class RobotController:
    def __init__(self):
        self.position = np.zeros(3)
        self.orientation = Rotation.from_quat([0, 0, 0, 1])
    
    def move_to_position(self, target_position):
        # Calculate path to target
        direction = target_position - self.position
        distance = np.linalg.norm(direction)
        
        if distance > 0.01:  # Threshold for reaching target
            # Move towards target
            step_size = min(0.1, distance)
            self.position += (direction / distance) * step_size
            return False  # Not yet at target
        return True  # Reached target
    
    def get_pose(self):
        return {
            'position': self.position,
            'orientation': self.orientation.as_quat()
        }
\`\`\`

## Real-world Applications

- Autonomous vehicles
- Industrial automation
- Healthcare robotics
- Space exploration

## Challenges and Future Directions

- Safety and reliability
- Generalization across environments
- Human-robot interaction
- Ethical considerations
    `,date:"2024-01-05",author:"Mada Kasasi",tags:["AI","Robotics","Computer Vision","Machine Learning"],category:"Technology",readTime:10,featured:!1,imageUrl:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"},{id:"python-fastapi-best-practices",title:"Building Scalable APIs with FastAPI: Best Practices and Patterns",excerpt:"Learn how to build high-performance, scalable APIs using FastAPI with modern Python practices and design patterns.",content:`
# Building Scalable APIs with FastAPI

FastAPI has become the go-to framework for building modern Python APIs due to its performance, automatic documentation, and type safety.

## Project Structure

A well-organized FastAPI project should follow a clear structure:
\`\`\`
app/
├── main.py
├── api/
│   ├── v1/
│   │   ├── endpoints/
│   │   └── api.py
├── core/
│   ├── config.py
│   └── security.py
├── models/
├── schemas/
├── services/
└── utils/
\`\`\`

## Dependency Injection

FastAPI's dependency injection system promotes clean, testable code:
\`\`\`python
from fastapi import Depends
from sqlalchemy.orm import Session

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/users/")
def read_users(db: Session = Depends(get_db)):
    return db.query(User).all()
\`\`\`

## Error Handling

Implement comprehensive error handling:
\`\`\`python
from fastapi import HTTPException

@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return items[item_id]
\`\`\`

## Background Tasks

Use background tasks for long-running operations:
\`\`\`python
from fastapi import BackgroundTasks

def send_email(email: str, message: str):
    # Send email logic
    pass

@app.post("/send-notification/")
def send_notification(
    email: str, 
    message: str, 
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_email, email, message)
    return {"message": "Notification sent"}
\`\`\`

## Testing

Comprehensive testing with pytest:
\`\`\`python
from fastapi.testclient import TestClient

client = TestClient(app)

def test_read_item():
    response = client.get("/items/1")
    assert response.status_code == 200
    assert response.json() == {"id": 1, "name": "Test Item"}
\`\`\`

## Performance Optimization

- Use async/await for I/O operations
- Implement caching with Redis
- Use connection pooling for databases
- Monitor with APM tools
    `,date:"2023-12-28",author:"Mada Kasasi",tags:["Python","FastAPI","API Design","Backend"],category:"Programming",readTime:15,featured:!1,imageUrl:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"}];function l(){let e="https://kasasi.dev";return[{url:e,lastModified:new Date,changeFrequency:"monthly",priority:1},{url:`${e}/blog`,lastModified:new Date,changeFrequency:"weekly",priority:.8},...p.map(t=>({url:`${e}/blog/${t.id}`,lastModified:new Date(t.date),changeFrequency:"monthly",priority:.6}))]}p.filter(e=>e.featured),p.slice(0,3);var u=i(12127);let m={...a}.default;if("function"!=typeof m)throw Error('Default export is missing in "C:\\Users\\Mada\\Downloads\\project-bolt-sb1-8wuhqnxe (2)\\portfolio\\app\\sitemap.ts"');async function d(e,t){let{__metadata_id__:i,...a}=await t.params||{},o=!!i&&i.endsWith(".xml");if(i&&!o)return new c.NextResponse("Not Found",{status:404});let n=i&&o?i.slice(0,-4):void 0,r=await m({id:n}),s=(0,u.resolveRouteData)(r,"sitemap");return new c.NextResponse(s,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let g=new n.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?filePath=C%3A%5CUsers%5CMada%5CDownloads%5Cproject-bolt-sb1-8wuhqnxe%20(2)%5Cportfolio%5Capp%5Csitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__",nextConfigOutput:"",userland:o}),{workAsyncStorage:h,workUnitAsyncStorage:f,serverHooks:b}=g;function y(){return(0,s.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:f})}}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[51,200],()=>i(98321));module.exports=a})();