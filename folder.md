src/
│
├── app/ # App-level setup (root)
│ ├── App.jsx
│ ├── main.jsx
│ └── providers.jsx # Theme, router, store (future)
│
├── assets/ # Static assets
│ ├── images/
│ ├── icons/
│ └── fonts/
│
├── components/ # Shared UI components
│ ├── ui/ # Pure UI (buttons, inputs)
│ │ ├── Button.jsx
│ │ ├── Input.jsx
│ │ └── Modal.jsx
│ │
│ ├── layout/ # Layout components
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── Container.jsx
│ │
│ └── feedback/ # Loaders, alerts, skeletons
│ ├── Loader.jsx
│ └── Skeleton.jsx
│
├── features/ # 🔥 FEATURE-BASED ARCHITECTURE
│ ├── home/
│ │ ├── components/
│ │ │ ├── Banner.jsx
│ │ │ └── CategoryCard.jsx
│ │ └── Home.jsx
│ │
│ ├── product/
│ │ ├── components/
│ │ │ ├── ProductCard.jsx
│ │ │ ├── ProductGrid.jsx
│ │ │ └── FilterSidebar.jsx
│ │ ├── hooks/
│ │ │ └── useProducts.js
│ │ └── product.constants.js
│ │
│ ├── auth/ # future-ready
│ │ └── Login.jsx
│ │
│ └── cart/
│ └── Cart.jsx
│
├── routes/ # App routing
│ └── AppRoutes.jsx
│
├── services/ # API & business logic
│ └── product.service.js
│
├── hooks/ # Reusable custom hooks
│ └── useDebounce.js
│
├── utils/ # Helpers & utilities
│ ├── constants.js
│ └── formatPrice.js
│
├── styles/ # Global Tailwind styles
│ └── index.css
│
└── config/ # App configuration
└── env.js
