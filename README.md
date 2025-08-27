# ecommerce
"npm run dev" to run app
using "upstash.com" to use redis database
using "cloudinary" to store images
using "stripe.com" to build payment

".aggregate" is a MongoDB method used to perform aggregation operations — which are like SQL's GROUP BY, JOIN, SUM, AVG, etc.

"3:15:00" to add "getProfile" route

Frontend
Delete "App.css"

all lib "npm i axios @stripe/stripe-js framer-motion lucide-react react-confetti react-hot-toast react-router-dom recharts zustand"

using shortcut "rafce" to create a react arrow function

using "axios" to make requests to our backend such as GET, POST, PUT, DELETE (example: "axios.get('/api/products').then(...)" )

using <motion.div> instead of <div> to add animations

using "Zustand" because it improve "state" compared to React

---DEPLOY website via "render.com"
add " "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend" " under " "scripts": {
    "dev": "nodemon backend/server.js",
    "start": "node backend/server.js", ... " code in "package.json" OUTSIDE (NOT IN front-end or backend).