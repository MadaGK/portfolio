exports.id=516,exports.ids=[516],exports.modules={6745:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,16444,23)),Promise.resolve().then(i.t.bind(i,16042,23)),Promise.resolve().then(i.t.bind(i,88170,23)),Promise.resolve().then(i.t.bind(i,49477,23)),Promise.resolve().then(i.t.bind(i,29345,23)),Promise.resolve().then(i.t.bind(i,12089,23)),Promise.resolve().then(i.t.bind(i,46577,23)),Promise.resolve().then(i.t.bind(i,31307,23))},16165:(e,t,i)=>{Promise.resolve().then(i.bind(i,39761))},17195:(e,t,i)=>{"use strict";i.d(t,{t:()=>s});var a=i(60687),o=i(43210),n=i(1753);class s extends o.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){}render(){return this.state.hasError?this.props.fallback?this.props.fallback:(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,a.jsxs)("div",{className:"text-center max-w-md mx-auto p-8",children:[(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)(n.eHT,{className:"mx-auto text-red-500",size:64})}),(0,a.jsx)("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Something went wrong"}),(0,a.jsx)("p",{className:"text-text-secondary mb-6",children:"We're sorry, but something unexpected happened. Please try refreshing the page."}),(0,a.jsxs)("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200",children:[(0,a.jsx)(n.jTZ,{size:16}),"Refresh Page"]}),!1]})}):this.props.children}}},19386:(e,t,i)=>{"use strict";i.d(t,{w:()=>s});var a=i(60687),o=i(4318),n=i(1753);function s(){let e=new Date().getFullYear(),t=[{name:"GitHub",url:"https://github.com/madakasasi",icon:n.BR8},{name:"Email",url:"mailto:mada@kasasi.dev",icon:n.pHD},{name:"Twitter",url:"https://twitter.com/madakasasi",icon:n.TC4},{name:"Instagram",url:"https://instagram.com/madakasasi",icon:n.eCe}];return(0,a.jsx)("footer",{className:"bg-background border-t border-border",children:(0,a.jsx)("div",{className:"container py-12",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-6",children:[(0,a.jsx)(o.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"flex items-center space-x-6",children:t.map(e=>(0,a.jsx)(o.P.a,{href:e.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,y:-2},whileTap:{scale:.9},className:"text-text-tertiary hover:text-primary transition-colors duration-200","aria-label":e.name,children:(0,a.jsx)(e.icon,{size:20})},e.name))}),(0,a.jsx)(o.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},className:"text-center",children:(0,a.jsxs)("p",{className:"text-text-tertiary text-sm flex items-center justify-center gap-2",children:["\xa9 ",e," Mada Kasasi. Built with",(0,a.jsx)(n.icx,{className:"text-red-500",size:14}),"using Next.js & Tailwind CSS"]})}),(0,a.jsx)(o.P.button,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.4},viewport:{once:!0},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-text-tertiary hover:text-primary transition-colors duration-200 text-sm",children:"Back to Top ↑"})]})})})}},39761:(e,t,i)=>{"use strict";i.d(t,{ThemeProvider:()=>o});var a=i(12907);let o=(0,a.registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mada\\Downloads\\project-bolt-sb1-8wuhqnxe (2)\\portfolio\\app\\components\\ThemeProvider.tsx","ThemeProvider");(0,a.registerClientReference)(function(){throw Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mada\\Downloads\\project-bolt-sb1-8wuhqnxe (2)\\portfolio\\app\\components\\ThemeProvider.tsx","useTheme")},43009:(e,t,i)=>{"use strict";i.d(t,{A5:()=>a,q1:()=>o});let a=[{id:"quantum-computing-basics",title:"Introduction to Quantum Computing: From Qubits to Quantum Algorithms",excerpt:"A comprehensive guide to understanding the fundamentals of quantum computing, including qubits, superposition, and quantum algorithms.",content:`
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
    `,date:"2023-12-28",author:"Mada Kasasi",tags:["Python","FastAPI","API Design","Backend"],category:"Programming",readTime:15,featured:!1,imageUrl:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"}],o=a.filter(e=>e.featured);a.slice(0,3)},52613:(e,t,i)=>{Promise.resolve().then(i.bind(i,54907))},54907:(e,t,i)=>{"use strict";i.d(t,{D:()=>r,ThemeProvider:()=>s});var a=i(60687),o=i(43210);let n=(0,o.createContext)({theme:"dark",setTheme:()=>null,toggleTheme:()=>null});function s({children:e,defaultTheme:t="dark",storageKey:i="portfolio-theme",...s}){let[r,c]=(0,o.useState)(t),[l,m]=(0,o.useState)(!1);return l?(0,a.jsx)(n.Provider,{...s,value:{theme:r,setTheme:e=>{c(e)},toggleTheme:()=>{c(e=>"dark"===e?"light":"dark")}},children:e}):(0,a.jsx)("div",{className:"dark",children:e})}let r=()=>{let e=(0,o.useContext)(n);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},58014:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c,metadata:()=>r});var a=i(37413),o=i(61421),n=i.n(o);i(82704);var s=i(39761);let r={metadataBase:new URL("https://kasasi.dev"),title:"Mada Kasasi - Systems Engineer & AI Specialist",description:"Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics. Building the future through code.",keywords:["Systems Engineer","C++","Python","Java","AI","Robotics","Quantum Computing","Astrophysics","Software Development"],authors:[{name:"Mada Kasasi"}],creator:"Mada Kasasi",publisher:"Mada Kasasi",robots:"index, follow",openGraph:{type:"website",locale:"en_US",url:"https://kasasi.dev",title:"Mada Kasasi - Systems Engineer & AI Specialist",description:"Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.",siteName:"Mada Kasasi Portfolio",images:[{url:"/og-image.jpg",width:1200,height:630,alt:"Mada Kasasi - Systems Engineer & AI Specialist"}]},twitter:{card:"summary_large_image",title:"Mada Kasasi - Systems Engineer & AI Specialist",description:"Systems Engineer passionate about C++, Python, Java, AI, Robotics, Quantum Computing, and Astrophysics.",images:["/og-image.jpg"],creator:"@madakasasi"},manifest:"/manifest.json"};function c({children:e}){return(0,a.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,a.jsxs)("head",{children:[(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),(0,a.jsx)("meta",{name:"theme-color",content:"#0070F3"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#0070F3"})]}),(0,a.jsx)("body",{className:n().className,children:(0,a.jsx)(s.ThemeProvider,{children:e})})]})}},77369:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,86346,23)),Promise.resolve().then(i.t.bind(i,27924,23)),Promise.resolve().then(i.t.bind(i,35656,23)),Promise.resolve().then(i.t.bind(i,40099,23)),Promise.resolve().then(i.t.bind(i,38243,23)),Promise.resolve().then(i.t.bind(i,28827,23)),Promise.resolve().then(i.t.bind(i,62763,23)),Promise.resolve().then(i.t.bind(i,97173,23))},82704:()=>{},95188:(e,t,i)=>{"use strict";i.d(t,{Y:()=>c});var a=i(60687),o=i(4318),n=i(43210),s=i(1753),r=i(54907);function c(){let[e,t]=(0,n.useState)(!1),{theme:i,toggleTheme:c}=(0,r.D)(),l=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,a.jsx)(o.P.header,{initial:{y:-100},animate:{y:0},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-background/80 backdrop-blur-md border-b border-border":"bg-transparent"}`,children:(0,a.jsxs)("nav",{className:"container flex items-center justify-between py-4",children:[(0,a.jsx)(o.P.div,{whileHover:{scale:1.05},className:"text-xl font-bold gradient-text cursor-pointer",onClick:()=>l("hero"),children:"MK"}),(0,a.jsx)("div",{className:"hidden md:flex items-center space-x-8",children:["About","Projects","Blog","Contact"].map(e=>(0,a.jsx)(o.P.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>l(e.toLowerCase()),className:"text-text-secondary hover:text-text-primary transition-colors duration-200",children:e},e))}),(0,a.jsx)(o.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:c,className:"p-2 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors duration-200",children:"dark"===i?(0,a.jsx)(s.Wh$,{size:20}):(0,a.jsx)(s.hkc,{size:20})})]})})}}};